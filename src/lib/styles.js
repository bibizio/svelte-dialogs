"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@charset \"UTF-8\";\n" +
".dialog__overlay {\n" +
"  z-index: 1000;\n" +
"  background: rgba(128, 128, 128, 0.5);\n" +
"  position: fixed;\n" +
"  top: 0;\n" +
"  left: 0;\n" +
"  width: 100vw;\n" +
"  height: 100vh;\n" +
"  display: flex;\n" +
"  justify-content: center;\n" +
"  align-items: center;\n" +
"}\n" +
"\n" +
".dialog__container {\n" +
"  z-index: 1010;\n" +
"  position: fixed;\n" +
"  min-width: 25vw;\n" +
"  max-width: 50vw;\n" +
"  max-height: 100vh;\n" +
"  padding: 2rem;\n" +
"  border-radius: 1rem;\n" +
"  background-color: #fff;\n" +
"}\n" +
"\n" +
".dialog__close-button {\n" +
"  position: absolute;\n" +
"  top: 0.5rem;\n" +
"  right: 0.5rem;\n" +
"  height: 1.5rem;\n" +
"  width: 1.5rem;\n" +
"  padding: 0;\n" +
"  border: none;\n" +
"  cursor: pointer;\n" +
"  background: transparent;\n" +
"  border-radius: 1rem;\n" +
"  background: #cccccc;\n" +
"}\n" +
".dialog__close-button:after {\n" +
"  color: white;\n" +
"  content: \"✕\";\n" +
"}\n" +
".dialog__close-button:hover {\n" +
"  background: rgba(202, 47, 63, 0.8);\n" +
"}\n" +
".dialog__close-button:focus {\n" +
"  background: rgba(202, 47, 63, 0.8);\n" +
"}\n" +
"\n" +
".dialog__header {\n" +
"  text-align: center;\n" +
"  border-bottom: 2px solid grey;\n" +
"}\n" +
"\n" +
".dialog__title {\n" +
"  font-size: large;\n" +
"  font-weight: bold;\n" +
"  line-height: 1.5;\n" +
"  margin: 0;\n" +
"}\n" +
"\n" +
".dialog__body {\n" +
"  text-align: center;\n" +
"  margin: 1rem 0;\n" +
"  min-height: 10vh;\n" +
"  max-height: 80vh;\n" +
"  overflow-y: auto;\n" +
"}\n" +
".dialog__body::-webkit-scrollbar {\n" +
"  width: 5px;\n" +
"}\n" +
".dialog__body::-webkit-scrollbar-track {\n" +
"  box-shadow: inset 0 0 5px rgba(204, 204, 204, 0.8);\n" +
"  border-radius: 10px;\n" +
"}\n" +
".dialog__body::-webkit-scrollbar-thumb {\n" +
"  border-radius: 10px;\n" +
"  box-shadow: inset 0 0 5px #cccccc;\n" +
"}\n" +
"\n" +
".dialog__footer {\n" +
"  display: flex;\n" +
"  justify-content: space-evenly;\n" +
"}\n" +
"\n" +
".dialog_button {\n" +
"  display: inline-block;\n" +
"  cursor: pointer;\n" +
"  font-size: 1rem;\n" +
"  padding: 0.5rem;\n" +
"  margin: 0 0.5rem;\n" +
"  min-width: 6rem;\n" +
"  text-align: center;\n" +
"  white-space: nowrap;\n" +
"  vertical-align: middle;\n" +
"  -webkit-user-select: none;\n" +
"     -moz-user-select: none;\n" +
"      -ms-user-select: none;\n" +
"          user-select: none;\n" +
"  border: 0.1rem solid transparent;\n" +
"  border-radius: 0.5rem;\n" +
"}\n" +
".dialog_button:disabled {\n" +
"  cursor: default;\n" +
"  opacity: 0.5;\n" +
"}\n" +
".dialog_button:focus {\n" +
"  border: 0.1rem solid transparent;\n" +
"}\n" +
"\n" +
".dialog_button--primary {\n" +
"  background-color: #cccccc;\n" +
"}\n" +
".dialog_button--primary:hover {\n" +
"  background-color: rgba(204, 204, 204, 0.8);\n" +
"}\n" +
".dialog_button--primary:focus {\n" +
"  box-shadow: 0 0 0 3px rgba(204, 204, 204, 0.5);\n" +
"}\n" +
"\n" +
".dialog_button--decline {\n" +
"  color: #fff;\n" +
"  background-color: #ca2f3f;\n" +
"}\n" +
".dialog_button--decline:hover {\n" +
"  background-color: rgba(202, 47, 63, 0.8);\n" +
"}\n" +
".dialog_button--decline:focus {\n" +
"  box-shadow: 0 0 0 3px rgba(202, 47, 63, 0.5);\n" +
"}");