// Hand-drawn 16×16 pixel sprites. No fonts, emoji, or image downloads.
export type EmblemKind = "seal" | "first-voyage" | "perfect" | "no-mistakes" | "dedicated" | "unstoppable" | "rookie" | "rising" | "yonko" | "pirate-king" | "encyclopedia" | "explorer" | "deep-lore" | "will" | "gold-hat" | "treasure";
interface EmblemSprite { rows: string[]; palette: Record<string, string> }
function art(rows: string[], main: string, shade: string, accent = "#f5c84b"): EmblemSprite {
  return { rows, palette: { m: main, s: shade, a: accent, h: "#fff4d6", o: "#18243b", b: "#49637b" } };
}
function glyphs(sprite: EmblemSprite, text: string, x: number, y: number, color = "o"): EmblemSprite {
  const glyph: Record<string, string[]> = { "0": ["111", "101", "101", "101", "111"], "3": ["111", "001", "111", "001", "111"], "7": ["111", "001", "010", "010", "010"], "D": ["110", "101", "101", "101", "110"] };
  const rows = Array.from({ length: 16 }, (_, r) => (sprite.rows[r] ?? "").padEnd(16, ".").split(""));
  [...text].forEach((letter, l) => glyph[letter].forEach((row, r) => [...row].forEach((pixel, c) => {
    if (pixel === "1") rows[y + r][x + l * 4 + c] = color;
  })));
  return { ...sprite, rows: rows.map(row => row.join("")) };
}
const calendar = art([
  "................", "....oo....oo....", "..oommoooommoo..", ".ommmmmmmmmmmmo.",
  ".osssssssssssso.", ".ohhhhhhhhhhhho.", ".ohhhhhhhhhhhho.", ".ohhhhhhhhhhhho.",
  ".ohhhhhhhhhhhho.", ".ohhhhhhhhhhhho.", ".ohhhhhhhhhhhho.", ".ohhhhhhhhhhhho.",
  ".ohhhhhhhhhhhho.", "..oooooooooooo..", "...bbbbbbbbbb...", "................",
], "#f17068", "#c14146");

export const EMBLEM_SPRITES: Record<EmblemKind, EmblemSprite> = {
  seal: art([
    "................", ".....oooooo.....", "...oommmmmmoo...", "..ommmmmmmmmmo..", "..ommhmmmhmmmo..", ".ommhhhhhmmmmmo.",
    ".ommmhhhmmmmmmo.", ".ommhhhhhmmmmmo.", "..ommhmhhmmmmo..", "..ommmmmmmmmmo..", "...oommmmmmoo...", ".....oooooo.....",
    "....sassass.....", "....sassass.....", "....ss..ss......", "................",
  ], "#eebc42", "#c64956", "#ed7084"),
  "first-voyage": art([
    ".......o........", ".......ommm.....", ".......ommm.....", "......ho........", ".....hhoh.......", "....hhhohh......",
    "...hhhhohhh.....", "..hhhhhohhhh....", "..sssssoaaaa....", ".......o........", ".oooooooooooooo.", "..ommmmmmmmmmo..",
    "...osssssssso...", "....oooooooo....", ".bb...bbbb...bb.", "...bbbb...bbbb..",
  ], "#bf824a", "#996235", "#e9b458"),
  perfect: glyphs(art([
    "................", "......mm........", ".....mmmm.......", "....mmmmmm......", ".mmmmmmmmmmmmm..", "..mmmmmmmmmmm...",
    "...mmmmmmmmm....", "....mmmmmmm.....", "...mmmmmmmmm....", "..mmmmmmmmmmm...", "..mmmm...mmmm...", "..mm.......mm...",
    "................", "...aa....aa.....", "...aaa..aaa.....", "................",
  ], "#ffd45b", "#c18b21", "#e36274"), "7", 6, 4),
  "no-mistakes": art([
    "................", "..oooooooooooo..", "..ommmmmmmmmmo..", "..omhmmmmmmhmo..", "..ommmmmmhhmmo..", "..ommmmmhhmmmo..",
    "..ommhmhhmmmmo..", "..ommhhhmmmmmo..", "...ommhmmmmmo...", "...ommmmmmmo....", "....ommmmmo.....", ".....ommmo......",
    "......omo.......", ".......o........", "................", "................",
  ], "#39c69a", "#158462"),
  dedicated: glyphs(calendar, "7", 6, 7),
  unstoppable: glyphs(art([
    ".......m........", "......mmm.......", "...m..mmmm......", "..mmmmmmmmm.....", ".mmmmmmmmmmm....", ".mmmmmmmmmmmm...",
    "mmmmmmmmmmmmmm..", "mmmaaaaaaaaamm..", "mmaaaaaaaaaaamm.", "mmaaaaaaaaaaamm.", ".mmaaaaaaaaamm..", ".mmaaaaaaaaamm..",
    "..mmaaaaaaamm...", "...mmmmmmmmm....", "....mmmmmmm.....", "................",
  ], "#f36a37", "#c1412d", "#ffce61"), "30", 4, 8),
  rookie: art([
    "..o.............", "..oooooooooooo..", "..oaaaaaaassso..", "..oaahhhaassso..", "..oahohohaasso..", "..oaahhhaassso..",
    "..oaaahaaaasso..", "..oaahhhaassso..", "..oaaaaaaassso..", "..oooooooooooo..", "..o.............", "..o.............",
    "..o.............", "..o.............", ".mmm............", "................",
  ], "#e7b64b", "#9d233f", "#d84b63"),
  rising: art([
    "...........mm...", ".........mm.....", "...a...mmm......", "......mmmm......", ".....mmmmmm.....", "..mmmmmmmmmmmm..",
    "...mmmhhhhmmm...", "....mmhhhhmm....", "....mmhhhhmm....", "...mmmmmmmmmm...", "...mmm....mmm...", "..mm........mm..",
    ".mm.............", "mm....a.........", ".............a..", "................",
  ], "#f4be42", "#a47421", "#a29afb"),
  yonko: art([
    "................", "..m.m.....m.m...", "..mmm.....mmm...", "..sss.....sss...", "................", "......aaaa......",
    ".....aahhaa.....", ".....ahhhha.....", ".....ahhhha.....", ".....aahhaa.....", "......aaaa......", "................",
    "..m.m.....m.m...", "..mmm.....mmm...", "..sss.....sss...", "................",
  ], "#ffcd59", "#c78521", "#aa7bf4"),
  "pirate-king": art([
    "...m...m...m....", "...mm.mmm.mm....", "...mmmmmmmmm....", "...samsamsas....", "...sssssssss....", "....hhhhhhh.....",
    "...hhhhhhhhh....", "...hhohhohhh....", "...hhohhohhh....", "....hhhohhh.....", ".....hhhhh......", ".....hohoh......",
    "..hh........hh..", "....hhh..hhh....", ".......hh.......", "....hhh..hhh....",
  ], "#ffd459", "#c68b26", "#e45467"),
  encyclopedia: art([
    "................", "..oooo..oooo....", ".ommmmoommmmo...", ".omhhmoomhhmo...", ".ommmmoommmmo...", ".omhhmoomhhmo...",
    ".ommmmoommmmo...", ".omhhmoomhhmo...", ".ommmmoommmmo...", ".omhhmoomhhmo...", ".ommmmoommmmo...", ".ossssoosssso...",
    "..ooooaaoooo....", "......aa........", "......a.........", "................",
  ], "#64c2a7", "#2e816f", "#ffd45b"),
  explorer: art([
    "......aaaa......", "....aaohhoaa....", "...aobohhbooa...", "..aobbohhbbboa..", "..obbbommbbbbo..", ".aobbbommbbbboa.",
    ".obbooommooobbo.", ".ohhmmmaammmhho.", ".ohhsssaassshho.", ".obbooossooobbo.", ".aobbbo ssbbboa.", "..obbbossbbbbo..",
    "..aobbohhbbboa..", "...aobohhbooa...", "....aaohhoaa....", "......aaaa......",
  ].map(row => row.replaceAll(" ", ".")), "#f36b68", "#45b3d9", "#e8c15b"),
  "deep-lore": art([
    "....oooooooo....", "...ommmmmmmo....", "..ommmmmmmmmo...", "..omssmhsssmo...", "..omshmhshsmo...", "..omssmhsssmo...",
    "..ommmmmmmmmo...", "..omshssmhomo...", "..omshhsmhomo...", "..omshssmhomo...", "..ommmmmmmmmo...", "..omssshsssmo...",
    "..omshshshsmo...", "..ossssssssso...", "...ooooooooo....", "................",
  ], "#418ea6", "#1a4a6b", "#39d5bf"),
  will: glyphs(art([
    "................", ".....mmmmmm.....", "...mmhhhhhmmm...", "..mmhhhhhhhsmm..", "..mhhhhhhhhhsm..", ".mhhhhhhhhhhssm.",
    ".mhhhhhhhhhhssm.", ".mhhhhhhhhhhssm.", ".mhhhhhhhhhhssm.", ".mhhhhhhhhhhssm.", "..mhhhhhhhhhsm..", "..mmhhhhhhhsmm..",
    "...mmhhhhhmmm...", ".....mmmmmm.....", "................", "................",
  ], "#edbf55", "#c08a29"), "D", 6, 5),
  "gold-hat": art([
    "................", ".............h..", "............hhh.", ".............h..", ".....oooooo.....", "....ohmmmms o...".replace(" ", ""),
    "....ommmmmso....", "....ossssss o...".replace(" ", ""), ".ooomaaaaaamooo.", "ohmmmmmmmmmmmms o".replace(" ", ""),
    ".ommmmmmmmmmms o.".replace(" ", ""), "..oooooooooooo..", "................", "...h............", "..hhh...........", "...h............",
  ], "#ffd700", "#e9a51c", "#ab650b"),
  treasure: art([
    ".........h......", "........hhh.....", ".........h......", "....oooooooo....", "...osssasssso...", "..ossssassssso..",
    "..oaaaaaaaaaao..", "...oooooooooo...", "..omhmhmhmhmmo..", "..oooooooooooo..", "..ossssassssso..", "..osssaaaassso..",
    "..osssaoaassso..", "..ossssassssso..", "..oaaaaaaaaaao..", "...oooooooooo...",
  ], "#ffd34a", "#a96c35", "#e9bd52"),
};
