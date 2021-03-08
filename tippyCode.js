tippy("#arrow", {
  content: "Go to the top!",
  placement: "left",
  arrow: true,
});

// tippy("#title", {
//   content: "Want to know me better? So click on my name!",
//   showOnCreate: true,
// });

for (let i in document.getElementById("web-tools").children) {
  tippy('#'+document.getElementById("web-tools").children[Number(i)].id, {
    content: document.getElementById("web-tools").children[Number(i)].alt,
    followCursor: true,
    arrow: false,
  });
}