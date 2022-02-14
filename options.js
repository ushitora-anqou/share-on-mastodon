function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    domain: document.querySelector("#server-domain").value,
  });
}

async function restoreOptions() {
  var res = await browser.storage.sync.get("domain");
  document.querySelector("#server-domain").value = res.domain || "";
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
