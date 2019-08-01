import fetch from 'isomorphic-unfetch';

export async function serviceFetch(url) {
  const res = await fetch(url);
  const res_json = await res.json();
  return res_json;
}

export function sortObj (a, b) {
/*Case-insensitive alphabetical sort of objects on a 'name' key*/

  var nameA = a.name.toUpperCase();
  var nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
}

function range(start, end) {
	var size = end - start;
    return [...Array(size).keys()].map(i => i + start);
}

export var yearRange = yearGen();

function yearGen() {
	var d = new Date();
	var year = d.getFullYear();
	yearRange = range(1990, year);
	return yearRange.reverse().map(function(x){
    return {"value": x, "label": x};
  })
}

