export function selectUrl(element) {
  element.addEventListener('click', () => {
    let type_button = '#yearly'
    if (document.querySelector('#weekly').checked) {
      type_button = '#weekly'
    }
    else if (document.querySelector('#yearly').checked) {
      type_button = '#yearly'
    }
    window.location.replace(document.querySelector(type_button).value);
  })
}