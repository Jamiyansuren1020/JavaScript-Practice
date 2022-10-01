const timeConverter =(h , m, s) => {
    console.log((h * 3600000)+(m * 60000)+(s * 1000) + ' ' +"milliseconds")
}
timeConverter(1,20,30)