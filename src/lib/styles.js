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
"  box-sizing: border-box;\n" +
"  min-width: 25vw;\n" +
"  max-width: 50vw;\n" +
"  max-height: 100vh;\n" +
"  padding: 2rem;\n" +
"  border-radius: 1rem;\n" +
"  background-color: #fff;\n" +
"}\n" +
"\n" +
".dialog__container--no-padding {\n" +
"  padding: 0;\n" +
"}\n" +
"\n" +
".dialog__close-button {\n" +
"  box-sizing: border-box;\n" +
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
"  color: #fff;\n" +
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
"}\n" +
"\n" +
".dialog__header--error {\n" +
"  padding: 2rem 2rem 0 2rem;\n" +
"  border-radius: 1rem 1rem 0 0;\n" +
"  color: #fff;\n" +
"  background-color: #ca2f3f;\n" +
"}\n" +
"\n" +
".dialog__header--success {\n" +
"  padding: 2rem 2rem 0 2rem;\n" +
"  border-radius: 1rem 1rem 0 0;\n" +
"  color: #fff;\n" +
"  background-color: #6ea050;\n" +
"}\n" +
"\n" +
".dialog__header--warning {\n" +
"  padding: 2rem 2rem 0 2rem;\n" +
"  border-radius: 1rem 1rem 0 0;\n" +
"  color: #fff;\n" +
"  background-color: #f0be00;\n" +
"}\n" +
"\n" +
".dialog__title {\n" +
"  font-size: large;\n" +
"  font-weight: bold;\n" +
"  line-height: 1.5;\n" +
"  margin: 0;\n" +
"}\n" +
"\n" +
".dialog__title--xx-large {\n" +
"  font-size: xx-large;\n" +
"}\n" +
"\n" +
".dialog-content__divider {\n" +
"  border: 1px solid #808080;\n" +
"}\n" +
"\n" +
".dialog__body {\n" +
"  box-sizing: border-box;\n" +
"  text-align: center;\n" +
"  padding-top: 1rem;\n" +
"  min-height: 10vh;\n" +
"  max-height: calc(100vh - 10rem);\n" +
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
".dialog__body--contextual {\n" +
"  padding: 0 2rem;\n" +
"}\n" +
"\n" +
".dialog__footer {\n" +
"  margin-top: 1rem;\n" +
"  display: flex;\n" +
"}\n" +
"\n" +
".dialog__footer--contextual {\n" +
"  padding: 0 2rem 2rem 2rem;\n" +
"}\n" +
"\n" +
".dialog__footer--space-evenly {\n" +
"  justify-content: space-evenly;\n" +
"}\n" +
"\n" +
".dialog__footer--space-between {\n" +
"  justify-content: space-between;\n" +
"}\n" +
"\n" +
".dialog__form.touched .dialog__input:invalid {\n" +
"  border: 2px solid rgba(202, 47, 63, 0.5);\n" +
"  outline: 0;\n" +
"}\n" +
".dialog__form.touched .dialog__input:invalid:focus, .dialog__form.touched .dialog__input:invalid:focus-visible {\n" +
"  border: 2px solid #ca2f3f;\n" +
"  outline: 0;\n" +
"}\n" +
"\n" +
".dialog__input-label {\n" +
"  display: block;\n" +
"  width: -webkit-fit-content;\n" +
"  width: -moz-fit-content;\n" +
"  width: fit-content;\n" +
"  margin-left: 1rem;\n" +
"  text-align: left;\n" +
"  position: relative;\n" +
"  top: 8px;\n" +
"  padding: 0 5px;\n" +
"  background: #fff;\n" +
"}\n" +
"\n" +
".dialog__input {\n" +
"  box-sizing: border-box;\n" +
"  margin: 0;\n" +
"}\n" +
".dialog__input:not([type=checkbox]) {\n" +
"  width: 100%;\n" +
"  padding: 1rem;\n" +
"  background-color: #fff;\n" +
"  border: 2px solid #cccccc;\n" +
"  border-radius: 1rem;\n" +
"}\n" +
".dialog__input[type=checkbox] {\n" +
"  width: auto;\n" +
"  display: block;\n" +
"  margin-top: -7px;\n" +
"  text-align: left;\n" +
"}\n" +
".dialog__input[type=color] {\n" +
"  min-height: 3.5rem;\n" +
"}\n" +
".dialog__input[type=range] {\n" +
"  padding: 1rem 0;\n" +
"}\n" +
".dialog__input[type=file]::-webkit-file-upload-button {\n" +
"  display: none;\n" +
"}\n" +
".dialog__input[type=file]::file-selector-button {\n" +
"  display: none;\n" +
"}\n" +
".dialog__input:focus:not(:invalid) {\n" +
"  border: 2px solid #333;\n" +
"}\n" +
"\n" +
".dialog_button {\n" +
"  box-sizing: border-box;\n" +
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
".dialog_button--primary:not(:disabled):active {\n" +
"  background-color: #cccccc;\n" +
"}\n" +
".dialog_button--primary:focus {\n" +
"  box-shadow: 0 0 0 3px rgba(204, 204, 204, 0.5);\n" +
"}\n" +
"\n" +
".dialog_button--decline {\n" +
"  background-color: #ca2f3f;\n" +
"  color: #fff;\n" +
"}\n" +
".dialog_button--decline:hover {\n" +
"  background-color: rgba(202, 47, 63, 0.8);\n" +
"}\n" +
".dialog_button--decline:not(:disabled):active {\n" +
"  background-color: #ca2f3f;\n" +
"}\n" +
".dialog_button--decline:focus {\n" +
"  box-shadow: 0 0 0 3px rgba(202, 47, 63, 0.5);\n" +
"}\n" +
"\n" +
".dialog_button--error {\n" +
"  background-color: #ca2f3f;\n" +
"  color: #fff;\n" +
"}\n" +
".dialog_button--error:hover {\n" +
"  background-color: rgba(202, 47, 63, 0.8);\n" +
"}\n" +
".dialog_button--error:not(:disabled):active {\n" +
"  background-color: #ca2f3f;\n" +
"}\n" +
".dialog_button--error:focus {\n" +
"  box-shadow: 0 0 0 3px rgba(202, 47, 63, 0.5);\n" +
"}\n" +
"\n" +
".dialog_button--success {\n" +
"  background-color: #6ea050;\n" +
"  color: #fff;\n" +
"}\n" +
".dialog_button--success:hover {\n" +
"  background-color: rgba(110, 160, 80, 0.8);\n" +
"}\n" +
".dialog_button--success:not(:disabled):active {\n" +
"  background-color: #6ea050;\n" +
"}\n" +
".dialog_button--success:focus {\n" +
"  box-shadow: 0 0 0 3px rgba(110, 160, 80, 0.5);\n" +
"}\n" +
"\n" +
".dialog_button--warning {\n" +
"  background-color: #f0be00;\n" +
"  color: #fff;\n" +
"}\n" +
".dialog_button--warning:hover {\n" +
"  background-color: rgba(240, 190, 0, 0.8);\n" +
"}\n" +
".dialog_button--warning:not(:disabled):active {\n" +
"  background-color: #f0be00;\n" +
"}\n" +
".dialog_button--warning:focus {\n" +
"  box-shadow: 0 0 0 3px rgba(240, 190, 0, 0.5);\n" +
"}");