import './styles/style.css'
import { selectUrl } from './selector.js'
// import { translate } from './translator.js'

import de from './i18n/de.json'
import en from './i18n/en.json'
import es from './i18n/es.json'
import fr from './i18n/fr.json'
import ja from './i18n/ja.json'
import pt from './i18n/pt.json'

const lang_obj = {
    'de': de,
    'en': en,
    'es': es,
    'fr': fr,
    'ja': ja,
    'pt': pt,
}

const langsizes = {
  'de': {
    '#header': '2rem',
    '#yearly_text1': '0.74rem',
    '#yearly_text2': '0.74rem',
    '#yearly_text3': '0.74rem',
    '#best_offer': '0.53rem',
    '#weekly_text1': '0.74rem',
    '#weekly_text2': '0.74rem',
    '#footer_text1': '0.5rem',
    '#footer_text2': '0.5rem',
    '#footer_text3': '0.5rem',
  },
  'es': {
    '#header': '2rem',
    '#card1': '0.65rem',
    '#card2': '0.65rem',
    '#card3': '0.65rem',
    '#yearly_text1': '0.74rem',
    '#yearly_text2': '0.74rem',
    '#yearly_text3': '0.74rem',
    '#best_offer': '0.61rem',
    '#weekly_text1': '0.74rem',
    '#weekly_text2': '0.74rem',
    '#footer_text1': '0.6rem',
    '#footer_text2': '0.6rem',
    '#footer_text3': '0.6rem',
  },
  'fr': {
    '#header': '2rem',
    '#card1': '0.6rem',
    '#card2': '0.6rem',
    '#card3': '0.6rem',
    '#yearly_text1': '0.72rem',
    '#yearly_text2': '0.72rem',
    '#yearly_text3': '0.72rem',
    '#best_offer': '0.52rem',
    '#weekly_text1': '0.72rem',
    '#weekly_text2': '0.72rem',
    '#footer_text1': '0.535rem',
    '#footer_text2': '0.535rem',
    '#footer_text3': '0.535rem',
  },
  'ja': {
    '#header': '2.25rem',
    '#best_offer': '0.63rem',
  },
  'pt': {
    '#header': '2.1rem',
    '#yearly_text1': '0.74rem',
    '#yearly_text2': '0.74rem',
    '#yearly_text3': '0.74rem',
    '#best_offer': '0.56rem',
    '#weekly_text1': '0.74rem',
    '#weekly_text2': '0.74rem',
    '#footer_text1': '0.69rem',
    '#footer_text2': '0.69rem',
    '#footer_text3': '0.69rem',
  }
}

const langmargin = {
  'de': {
    '#footer_text1': '5px',
    '#footer_text2': '2px',
  },
  'en': {
    '#footer_text1': '7.73vw',
    '#footer_text2': '6.93vw',
  },
  'es': {
    '#footer_text1': '5px',
    '#footer_text2': '2px',
  },
  'fr': {
    '#footer_text1': '0px',
    '#footer_text2': '0px',
  },
  'ja': {
    '#footer_text1': '8px',
    '#footer_text2': '5px',
  },
  'pt': {
    '#footer_text1': '0px',
    '#footer_text2': '0px',
  },
}

let lang = translate()

// document.querySelector('#app').innerHTML = `
// <a href="#">
// <svg class="cross" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path fill-rule="evenodd" clip-rule="evenodd" d="M7.01053 6.59968L12.4165 1.19368L12.8144 1.59155L7.4084 6.99754L13 12.5892L12.5892 13L6.99754 7.4084L1.59155 12.8144L1.19368 12.4165L6.59968 7.01053L1 1.41085L1.41085 1L7.01053 6.59968Z" stroke="white" stroke-opacity="0.4" stroke-linejoin="round"/>
// </svg>
// </a>
// <h1>${lang_json['Get Unlimited <br>Access']}</h1>
// <div class="features">
// <div class="card1">
//   <div class="oval"></div>
//   <span class="card_text">
//     ${lang_json['Unlimited Art <br>Creation']}
//   </span>
// </div>
// <div class="card2">
//   <span class="card_text">
//   ${lang_json['Exclusive <br>Styles']}
//   </span>
// </div>
// <div class="card3" style="left: 59.46vw;">
//   <img src="/src/Bitmap4.png" class="little_pict" alt="">
//   <span class="card_text">
//   ${lang_json['Magic Avatars <br>With 20% Off']}
//   </span>
// </div>
// </div>
// <div class="selectors">
// <div class="form_radio_btn">
//   <input id="yearly" type="radio" name="radio" value="https://apple.com/" checked>
//   <label for="yearly">
//     <div class="text1">${lang_json['YEARLY ACCESS']}</div>
//     <div class="text2">${lang_json['Just {{price}} per year']}</div>
//     <div class="text3">${lang_json['{{price}} <br>per week']}</div>
//   </label>
//   <div class="best_offer">
//     <div class="best_offer_text">${lang_json['BEST OFFER']}</div>
//   </div>
// </div>
// <div class="form_radio_btn">
//   <input id="weekly" type="radio" name="radio" value="https://google.com/">
//   <label for="weekly" style="top: 64px;">
//     <div class="text4">${lang_json['WEEKLY ACCESS']}</div>
//     <div class="text5">${lang_json['{{price}} <br>per week']}</div>
//   </label>
// </div>
// </div>
// <button class="continue" id="continue">
// <div class="continue_text">
// ${lang_json['Continue']}
// </div>
// </button>
// <div class="footer">
// <a class="footer_a" style="margin-right: 29px;" href="#">${lang_json['Terms of Use']}</a>
// <a class="footer_a" style="margin-right: 26px;" href="#">${lang_json['Privacy Policy']}</a>
// <a class="footer_a" style="margin-right: 0px;" href="#">${lang_json['Restore']}</a>
// </div>
// `

selectUrl(document.querySelector('#continue'))

function translate(){
  let url = new URL(window.location);
  let lang = url.searchParams.get('lang');
  if (!lang){
      if(lang_obj[`${window.navigator.language.split('-')[0]}`] == undefined){
          lang = 'en'
      }
      else{
          lang = lang_obj[`${window.navigator.language.split('-')[0]}`]
      }
  }
  return lang
}

function setText(lang_json){
  const year_price = '$39.99'
  const week_price = '$6.99'
  const best_week_price = '$0.48'

  if(lang_json){
    document.querySelector('#header').innerHTML = lang_json['Get Unlimited <br>Access']
    document.querySelector('#card1').innerHTML = lang_json['Unlimited Art <br>Creation']
    document.querySelector('#card2').innerHTML = lang_json['Exclusive <br>Styles']
    document.querySelector('#card3').innerHTML = lang_json['Magic Avatars <br>With 20% Off']
    document.querySelector('#yearly_text1').innerHTML = lang_json['YEARLY ACCESS']
    document.querySelector('#yearly_text2').innerHTML = lang_json['Just {{price}} per year'].replace('{{price}}', year_price)
    document.querySelector('#yearly_text3').innerHTML = lang_json['{{price}} <br>per week'].replace('{{price}}', best_week_price)
    document.querySelector('#best_offer').innerHTML = lang_json['BEST OFFER']
    document.querySelector('#weekly_text1').innerHTML = lang_json['WEEKLY ACCESS']
    document.querySelector('#weekly_text2').innerHTML = lang_json['{{price}} <br>per week'].replace('{{price}}', week_price)
    document.querySelector('#continue_text').innerHTML = lang_json['Continue']
    document.querySelector('#footer_text1').innerHTML = lang_json['Terms of Use']
    document.querySelector('#footer_text2').innerHTML = lang_json['Privacy Policy']
    document.querySelector('#footer_text3').innerHTML = lang_json['Restore']
  }
}

function setFontSize(lang){
  for(let key in langsizes[lang]){
    document.querySelector(key).style.fontSize = langsizes[lang][key]
  }
}

function setFooterMargin(lang){
  document.querySelector('#footer_text1').style.marginRight = langmargin[lang]['#footer_text1']
  document.querySelector('#footer_text2').style.marginRight = langmargin[lang]['#footer_text2']
}

setText(lang_obj[lang])

setFontSize(lang)

setFooterMargin(lang)
