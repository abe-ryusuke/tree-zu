<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
export default {
  name: 'BaseIndex'
}
</script>
<style>
/*! destyle.css v3.0.0 | MIT License | https://github.com/nicolas-cusan/destyle.min.css */
*,::before,::after{box-sizing:border-box;border-style:solid;border-width:0}html{line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}body{margin:0}main{display:block}p,table,blockquote,address,pre,iframe,form,figure,dl{margin:0}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;margin:0}ul,ol{margin:0;padding:0;list-style:none}dt{font-weight:700}dd{margin-left:0}hr{box-sizing:content-box;height:0;overflow:visible;border-top-width:1px;margin:0;clear:both;color:inherit}pre{font-family:monospace,monospace;font-size:inherit}address{font-style:inherit}a{background-color:transparent;text-decoration:none;color:inherit}abbr[title]{text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:inherit}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}svg,img,embed,object,iframe{vertical-align:bottom}button,input,optgroup,select,textarea{-webkit-appearance:none;appearance:none;vertical-align:middle;color:inherit;font:inherit;background:transparent;padding:0;margin:0;border-radius:0;text-align:inherit;text-transform:inherit}[type="checkbox"]{-webkit-appearance:checkbox;appearance:checkbox}[type="radio"]{-webkit-appearance:radio;appearance:radio}button,[type="button"],[type="reset"],[type="submit"]{cursor:pointer}button:disabled,[type="button"]:disabled,[type="reset"]:disabled,[type="submit"]:disabled{cursor:default}:-moz-focusring{outline:auto}select:disabled{opacity:inherit}option{padding:0}fieldset{margin:0;padding:0;min-width:0}legend{padding:0}progress{vertical-align:baseline}textarea{overflow:auto}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{outline-offset:-2px}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}label[for]{cursor:pointer}details{display:block}summary{display:list-item}[contenteditable]:focus{outline:auto}table{border-color:inherit}caption{text-align:left}td,th{vertical-align:top;padding:0}th{text-align:left;font-weight:700}
#content {
  max-width: 1100px;
  padding: 20px;
  margin: 0px auto 0px auto;
}
#content_wide {
  max-width: 97%;
  padding: 20px;
  margin: 0px auto 0px auto;
}
#container {
  max-width: 1000px;
  margin: 40px auto 0px auto;
}
#pageTitle {
  font-size: 2rem;
  text-align: center;
  margin: 0px 0px 40px 0px;
}
input[type="text"],
input[type="tel"],
input[type="date"],
input[type="datetime"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="time"],
input[type="url"],
input[type="password"],
textarea,
select {
    border: none;
    border-radius: 4px;
    font-size:16px;
    margin: 0;
    outline: 0;
    padding:10px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    background-color: #fbfbfb;
    -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
    box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
    line-height:1;
    font-family:'ＭＳ Ｐゴシック', sans-serif !important;
}

input[type="text"]:focus,
input[type="tel"]:focus,
input[type="date"]:focus,
input[type="datetime"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
input[type="search"]:focus,
input[type="time"]:focus,
input[type="url"]:focus,
input[type="password"]:focus,
textarea:focus,
select:focus{
  background: #e9e9e9;
}
table {
  border-top:1px solid #cccccc;
  border-left:1px solid #cccccc;
  border-collapse:collapse;
  border-spacing:0;
  width: 100%;
  empty-cells:show;
  margin: 0px 0px 40px 1px;
  }
table > tbody > tr > th {
  line-height: 160%;
  font-weight: normal;
  vertical-align: middle;
  text-align: left;
  white-space: nowrap;
  border-right:1px solid #cccccc;
  border-bottom:1px solid #cccccc;
  padding:20px 10px;
  }

table > tbody > tr > td {
  line-height: 160%;
  border-right:1px solid #cccccc;
  border-bottom:1px solid #cccccc;
  padding:20px 10px;
  }
table > tbody > tr > td img {
  }
.button {
  width: 150px;
  background-color: #0072e7;
  padding: 10px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  margin: 0 auto 20px auto;
}
</style>
