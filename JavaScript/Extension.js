export const open = (element, Link) => {
    let e = document.querySelector(element);
    return e.addEventListener('click' , () => {
        document.location.href = Link;
    })
}