import { formatDate, highlightText } from './utils';

console.log('Content script loaded!');
const today = formatDate(new Date());
console.log(`Today is: ${today}`);

// 使用导入的函数
document.addEventListener('DOMContentLoaded', () => {
    const today = formatDate(new Date());
    console.log(`Today is: ${today}`);

    // 在页面上查找并高亮某些文本
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
        highlightText('important', p);
    });
});