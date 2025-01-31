const alphabetData: { [key: string]: any } = {
  a: require("../assets/audio/singleLetters/a.mp3"),
  ă: require("../assets/audio/singleLetters/ă.mp3"),
  â: require("../assets/audio/singleLetters/â.mp3"),
  b: require("../assets/audio/singleLetters/b.mp3"),
  c: require("../assets/audio/singleLetters/c.mp3"),
  d: require("../assets/audio/singleLetters/d.mp3"),
  đ: require("../assets/audio/singleLetters/đ.mp3"),
  e: require("../assets/audio/singleLetters/e.mp3"),
  ê: require("../assets/audio/singleLetters/ê.mp3"),
  g: require("../assets/audio/singleLetters/g.mp3"),
  h: require("../assets/audio/singleLetters/h.mp3"),
  i: require("../assets/audio/singleLetters/i.mp3"),
  k: require("../assets/audio/singleLetters/k.mp3"),
  l: require("../assets/audio/singleLetters/l.mp3"),
  m: require("../assets/audio/singleLetters/m.mp3"),
  n: require("../assets/audio/singleLetters/n.mp3"),
  o: require("../assets/audio/singleLetters/o.mp3"),
  ô: require("../assets/audio/singleLetters/ô.mp3"),
  ơ: require("../assets/audio/singleLetters/ơ.mp3"),
  p: require("../assets/audio/singleLetters/p.mp3"),
  q: require("../assets/audio/singleLetters/q.mp3"),
  r: require("../assets/audio/singleLetters/r.mp3"),
  s: require("../assets/audio/singleLetters/s.mp3"),
  t: require("../assets/audio/singleLetters/t.mp3"),
  u: require("../assets/audio/singleLetters/u.mp3"),
  ư: require("../assets/audio/singleLetters/ư.mp3"),
  v: require("../assets/audio/singleLetters/v.mp3"),
  x: require("../assets/audio/singleLetters/x.mp3"),
  y: require("../assets/audio/singleLetters/y.mp3"),
};

const consonantClustersData: { [key: string]: any } = {
  ch: require("../assets/audio/consonantClusters/ch.mp3"),
  gh: require("../assets/audio/consonantClusters/gh.mp3"),
  gi: require("../assets/audio/consonantClusters/gi.mp3"),
  kh: require("../assets/audio/consonantClusters/kh.mp3"),
  nh: require("../assets/audio/consonantClusters/nh.mp3"),
  ng: require("../assets/audio/consonantClusters/ng.mp3"),
  ngh: require("../assets/audio/consonantClusters/ngh.mp3"),
  ph: require("../assets/audio/consonantClusters/ph.mp3"),
  qu: require("../assets/audio/consonantClusters/qu.mp3"),
  th: require("../assets/audio/consonantClusters/th.mp3"),
  tr: require("../assets/audio/consonantClusters/tr.mp3"),
};

const unifiedData = { ...alphabetData, ...consonantClustersData };

export { alphabetData, consonantClustersData, unifiedData };
