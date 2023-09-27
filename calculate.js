console.log(123);
let resultField = document.getElementById("result");
let end = false
function clearValue() {
    resultField.value = "";
    end = false
}

function get(value, type) {
    console.log(value, type, end);
    // if (end == true) {
    // 	resultField.value += value;

    // }
    if (end == true && type == "num") {
        this.clearValue()
        resultField.value += value;
    }
    else {
        end = false;
        resultField.value += value;
    }
}
 function calculate() {
    end = true
    try {
        console.log(resultField.value);
        if (resultField.value.indexOf('^') != -1) {
            resultField.value = this.pow(resultField.value, resultField.value.indexOf('^'))
        }
        resultField.value = eval(resultField.value);
        //
        //计算存在精度问题s
        resultField.value = roundFun(resultField.value, 5)

    } catch (error) {
        resultField.value = "错误";
    }
}

function pow(value, pos) {
    if (pos != -1) {
        let arr = value.split("")
        let powVal = Math.pow(arr[pos - 1], arr[pos + 1])
        arr.splice(pos - 1, 3, powVal)
        value = arr.join("")
        return value
    }
}
function back() {
    resultField.value = resultField.value.substring(0, resultField.value.length - 1);

}
function sin() {
    end = true
    resultField.value = Math.sin(resultField.value);
    console.log(resultField.value);
    if (resultField.value == "NaN")
        resultField.value = "运算错误";

}
function cos() {
    end = true
    resultField.value = Math.cos(resultField.value);
    if (resultField.value == "NaN")
        resultField.value = "运算错误";
}
function tan() {
    end = true
    resultField.value = Math.tan(resultField.value);
    if (resultField.value == "NaN")
        resultField.value = "运算错误";
}
function sqrt() {
    end = true
    resultField.value = Math.sqrt(resultField.value);
    if (resultField.value == "NaN")
        resultField.value = "运算错误";
}
function cbrt() {
    end = true
    resultField.value = Math.cbrt(resultField.value)
    if (resultField.value == "NaN")
        resultField.value = "运算错误";
}
function square() {
    end = true
    resultField.value = Math.pow(resultField.value, 2);
    if (resultField.value == "NaN")
        resultField.value = "运算错误";
}

function cube() {
    end = true
    resultField.value = Math.pow(resultField.value, 3);
    if (resultField.value == "NaN")
        resultField.value = "运算错误";
}

function cal(value) {
    resultField.value += value;
    if (resultField.value == "NaN")
        resultField.value = "运算错误";
}

//保留n位小数
function roundFun(value, n) {
    return Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
}