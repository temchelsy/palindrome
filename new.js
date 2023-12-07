setInterval(function () {
    let ramdomColor = math.floor(math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + ramdomColor;
}, 1000);