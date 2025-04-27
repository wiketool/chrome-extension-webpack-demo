// 实用函数
export function formatDate(date) {
    return new Date(date).toLocaleDateString();
}

export function highlightText(text, element) {
    element.innerHTML = element.innerHTML.replace(
        new RegExp(text, 'gi'),
        match => `<span class="highlight">${match}</span>`
    );
}