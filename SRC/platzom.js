export default function platzom(str){
  let translation = str;
  //Primer condición: se quitan los ultimos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0,-2)
  }

  if (str.toLowerCase().startsWith('z')) {
    translation = translation + 'pe';
  }

  if (translation.length >= 10) {
    let firstHalf = translation.slice(0,Math.round(translation.length)/2);
    let lastHalf = translation.slice(Math.round(translation.length)/2);

    translation = `${firstHalf}-${lastHalf}`;
  }

  const reverse = (str)=>str.split('').reverse().join('');

  function minMay(str){
    const length = str.length;
    let translation = ''
    let capitalize = true

    for (let i = 0; i < length; i++) {
      const char = str.charAt(i);
      translation +=capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize;
    }
    return translation;
  }

  if (str == reverse(str)) {
    return minMay(str);
  }

  return translation;
}
