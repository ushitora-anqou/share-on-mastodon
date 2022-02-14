browser.browserAction.onClicked.addListener(async (tab) => {
  const st = await browser.storage.sync.get("domain");
  if (st.domain) {
    const domain = st.domain;
    const text = `${tab.title} ${tab.url}`;
    const url = `https://${domain}/share?text=${text}`;
    browser.windows.create({
      url: url,
      type: "popup",
      height: 500,
      width: 500,
    });
  } else {
    browser.tabs.create({
      url: browser.runtime.getURL("/options.html"),
    });
  }
});
