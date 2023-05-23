function isIsogram(str){
  let array = str.split('');
  array = array.map(item => item.toUpperCase());
  let my_set = new Set(array);
  return array.length == my_set.size;
}
