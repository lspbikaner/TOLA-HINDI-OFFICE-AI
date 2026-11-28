async function updateInfo() {
  const infoElem = document.getElementById('info');
  try {
    const info = await window.api.getAppInfo();
    infoElem.innerText = `App: ${info.appName} | Version: ${info.version} | Status: ${info.status}`;
  } catch (err) {
    infoElem.innerText = 'Failed to load app info.';
  }
}

document.getElementById('loadBtn').addEventListener('click', updateInfo);
updateInfo();
