function generateQRCode() {
  const input = document.getElementById("qr-input").value;
  const qrContainer = document.getElementById("qr-code");
  qrContainer.innerHTML = "";
  if (input.trim() === "") {
    alert("Please enter text or a URL to generate QR code.");
    return;
  }
  const qr = new QRious({
    element: document.createElement("canvas"),
    value: input,
    size: 200
  });
  qrContainer.appendChild(qr.element);
}
