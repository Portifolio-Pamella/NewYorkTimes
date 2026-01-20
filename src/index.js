import axios from 'axios';
import * as XLSX from 'xlsx';
import dotenv from 'dotenv';


dotenv.config();


const API_KEY = process.env.NYT_API_KEY;
const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';


const searchTerm = process.argv[2];


if (!searchTerm) {
console.log('Informe um tema. Exemplo: node src/index.js tecnologia');
process.exit(1);
}


async function fetchNews() {
let articles = [];
let page = 0;


console.log(`Buscando notícias sobre: ${searchTerm}`);


while (articles.length < 50) {
console.log(`Buscando página ${page + 1}...`);


const response = await axios.get(BASE_URL, {
params: {
q: searchTerm,
'api-key': API_KEY,
page
}
});


const docs = response.data.response.docs;


if (docs.length === 0) break;


docs.forEach(doc => {
if (articles.length < 50) {
articles.push({
titulo: doc.headline.main,
data_publicacao: doc.pub_date.split('T')[0],
descricao: doc.abstract
});
}
});


page++;
}


if (articles.length < 50) {
console.log(`Apenas ${articles.length} notícias encontradas.`);
}


return articles;
}


function generateExcel(data) {
const worksheet = XLSX.utils.json_to_sheet(data);
const workbook = XLSX.utils.book_new();


XLSX.utils.book_append_sheet(workbook, worksheet, 'Notícias');


const fileName = `noticias-${searchTerm}.xlsx`;
XLSX.writeFile(workbook, fileName);


console.log(`✅ Arquivo gerado: ${fileName}`);
}


(async () => {
try {
const news = await fetchNews();
generateExcel(news);
} catch (error) {
console.error('Erro ao buscar notícias:', error.message);
}
}
)();