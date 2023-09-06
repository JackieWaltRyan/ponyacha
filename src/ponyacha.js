import "./style.scss";

import sha256 from "crypto-js/sha256";

import checkbox from "./images/checkbox.webp";
import spinner from "./images/spinner.webp";
import checkmark from "./images/checkmark.webp";
import checkmark_blue from "./images/checkmark_blue.webp";
import roku_chan from "./images/roku_chan.webp";
import refresh_2x from "./images/refresh_2x.webp";

import ts from "./images/ts.webp";
import aj from "./images/aj.webp";
import rr from "./images/rr.webp";
import pp from "./images/pp.webp";
import rd from "./images/rd.webp";
import fs from "./images/fs.webp";

import ts_1 from "./images/ts/ts_1.webp";
import ts_2 from "./images/ts/ts_2.webp";
import ts_3 from "./images/ts/ts_3.webp";
import ts_4 from "./images/ts/ts_4.webp";
import ts_5 from "./images/ts/ts_5.webp";
import ts_6 from "./images/ts/ts_6.webp";
import ts_7 from "./images/ts/ts_7.webp";
import ts_8 from "./images/ts/ts_8.webp";
import ts_9 from "./images/ts/ts_9.webp";
import ts_10 from "./images/ts/ts_10.webp";
import ts_11 from "./images/ts/ts_11.webp";
import ts_12 from "./images/ts/ts_12.webp";
import ts_13 from "./images/ts/ts_13.webp";
import ts_14 from "./images/ts/ts_14.webp";
import ts_15 from "./images/ts/ts_15.webp";
import ts_16 from "./images/ts/ts_16.webp";
import ts_17 from "./images/ts/ts_17.webp";
import ts_18 from "./images/ts/ts_18.webp";
import ts_19 from "./images/ts/ts_19.webp";
import ts_20 from "./images/ts/ts_20.webp";
import ts_21 from "./images/ts/ts_21.webp";
import ts_22 from "./images/ts/ts_22.webp";
import ts_23 from "./images/ts/ts_23.webp";
import ts_24 from "./images/ts/ts_24.webp";
import ts_25 from "./images/ts/ts_25.webp";
import ts_26 from "./images/ts/ts_26.webp";
import ts_27 from "./images/ts/ts_27.webp";
import ts_28 from "./images/ts/ts_28.webp";
import ts_29 from "./images/ts/ts_29.webp";
import ts_30 from "./images/ts/ts_30.webp";

import aj_1 from "./images/aj/aj_1.webp";
import aj_2 from "./images/aj/aj_2.webp";
import aj_3 from "./images/aj/aj_3.webp";
import aj_4 from "./images/aj/aj_4.webp";
import aj_5 from "./images/aj/aj_5.webp";
import aj_6 from "./images/aj/aj_6.webp";
import aj_7 from "./images/aj/aj_7.webp";
import aj_8 from "./images/aj/aj_8.webp";
import aj_9 from "./images/aj/aj_9.webp";
import aj_10 from "./images/aj/aj_10.webp";
import aj_11 from "./images/aj/aj_11.webp";
import aj_12 from "./images/aj/aj_12.webp";
import aj_13 from "./images/aj/aj_13.webp";
import aj_14 from "./images/aj/aj_14.webp";
import aj_15 from "./images/aj/aj_15.webp";
import aj_16 from "./images/aj/aj_16.webp";
import aj_17 from "./images/aj/aj_17.webp";
import aj_18 from "./images/aj/aj_18.webp";
import aj_19 from "./images/aj/aj_19.webp";
import aj_20 from "./images/aj/aj_20.webp";
import aj_21 from "./images/aj/aj_21.webp";
import aj_22 from "./images/aj/aj_22.webp";
import aj_23 from "./images/aj/aj_23.webp";
import aj_24 from "./images/aj/aj_24.webp";
import aj_25 from "./images/aj/aj_25.webp";
import aj_26 from "./images/aj/aj_26.webp";
import aj_27 from "./images/aj/aj_27.webp";
import aj_28 from "./images/aj/aj_28.webp";
import aj_29 from "./images/aj/aj_29.webp";
import aj_30 from "./images/aj/aj_30.webp";

import rr_1 from "./images/rr/rr_1.webp";
import rr_2 from "./images/rr/rr_2.webp";
import rr_3 from "./images/rr/rr_3.webp";
import rr_4 from "./images/rr/rr_4.webp";
import rr_5 from "./images/rr/rr_5.webp";
import rr_6 from "./images/rr/rr_6.webp";
import rr_7 from "./images/rr/rr_7.webp";
import rr_8 from "./images/rr/rr_8.webp";
import rr_9 from "./images/rr/rr_9.webp";
import rr_10 from "./images/rr/rr_10.webp";
import rr_11 from "./images/rr/rr_11.webp";
import rr_12 from "./images/rr/rr_12.webp";
import rr_13 from "./images/rr/rr_13.webp";
import rr_14 from "./images/rr/rr_14.webp";
import rr_15 from "./images/rr/rr_15.webp";
import rr_16 from "./images/rr/rr_16.webp";
import rr_17 from "./images/rr/rr_17.webp";
import rr_18 from "./images/rr/rr_18.webp";
import rr_19 from "./images/rr/rr_19.webp";
import rr_20 from "./images/rr/rr_20.webp";
import rr_21 from "./images/rr/rr_21.webp";
import rr_22 from "./images/rr/rr_22.webp";
import rr_23 from "./images/rr/rr_23.webp";
import rr_24 from "./images/rr/rr_24.webp";
import rr_25 from "./images/rr/rr_25.webp";
import rr_26 from "./images/rr/rr_26.webp";
import rr_27 from "./images/rr/rr_27.webp";
import rr_28 from "./images/rr/rr_28.webp";
import rr_29 from "./images/rr/rr_29.webp";
import rr_30 from "./images/rr/rr_30.webp";

import pp_1 from "./images/pp/pp_1.webp";
import pp_2 from "./images/pp/pp_2.webp";
import pp_3 from "./images/pp/pp_3.webp";
import pp_4 from "./images/pp/pp_4.webp";
import pp_5 from "./images/pp/pp_5.webp";
import pp_6 from "./images/pp/pp_6.webp";
import pp_7 from "./images/pp/pp_7.webp";
import pp_8 from "./images/pp/pp_8.webp";
import pp_9 from "./images/pp/pp_9.webp";
import pp_10 from "./images/pp/pp_10.webp";
import pp_11 from "./images/pp/pp_11.webp";
import pp_12 from "./images/pp/pp_12.webp";
import pp_13 from "./images/pp/pp_13.webp";
import pp_14 from "./images/pp/pp_14.webp";
import pp_15 from "./images/pp/pp_15.webp";
import pp_16 from "./images/pp/pp_16.webp";
import pp_17 from "./images/pp/pp_17.webp";
import pp_18 from "./images/pp/pp_18.webp";
import pp_19 from "./images/pp/pp_19.webp";
import pp_20 from "./images/pp/pp_20.webp";
import pp_21 from "./images/pp/pp_21.webp";
import pp_22 from "./images/pp/pp_22.webp";
import pp_23 from "./images/pp/pp_23.webp";
import pp_24 from "./images/pp/pp_24.webp";
import pp_25 from "./images/pp/pp_25.webp";
import pp_26 from "./images/pp/pp_26.webp";
import pp_27 from "./images/pp/pp_27.webp";
import pp_28 from "./images/pp/pp_28.webp";
import pp_29 from "./images/pp/pp_29.webp";
import pp_30 from "./images/pp/pp_30.webp";

import rd_1 from "./images/rd/rd_1.webp";
import rd_2 from "./images/rd/rd_2.webp";
import rd_3 from "./images/rd/rd_3.webp";
import rd_4 from "./images/rd/rd_4.webp";
import rd_5 from "./images/rd/rd_5.webp";
import rd_6 from "./images/rd/rd_6.webp";
import rd_7 from "./images/rd/rd_7.webp";
import rd_8 from "./images/rd/rd_8.webp";
import rd_9 from "./images/rd/rd_9.webp";
import rd_10 from "./images/rd/rd_10.webp";
import rd_11 from "./images/rd/rd_11.webp";
import rd_12 from "./images/rd/rd_12.webp";
import rd_13 from "./images/rd/rd_13.webp";
import rd_14 from "./images/rd/rd_14.webp";
import rd_15 from "./images/rd/rd_15.webp";
import rd_16 from "./images/rd/rd_16.webp";
import rd_17 from "./images/rd/rd_17.webp";
import rd_18 from "./images/rd/rd_18.webp";
import rd_19 from "./images/rd/rd_19.webp";
import rd_20 from "./images/rd/rd_20.webp";
import rd_21 from "./images/rd/rd_21.webp";
import rd_22 from "./images/rd/rd_22.webp";
import rd_23 from "./images/rd/rd_23.webp";
import rd_24 from "./images/rd/rd_24.webp";
import rd_25 from "./images/rd/rd_25.webp";
import rd_26 from "./images/rd/rd_26.webp";
import rd_27 from "./images/rd/rd_27.webp";
import rd_28 from "./images/rd/rd_28.webp";
import rd_29 from "./images/rd/rd_29.webp";
import rd_30 from "./images/rd/rd_30.webp";

import fs_1 from "./images/fs/fs_1.webp";
import fs_2 from "./images/fs/fs_2.webp";
import fs_3 from "./images/fs/fs_3.webp";
import fs_4 from "./images/fs/fs_4.webp";
import fs_5 from "./images/fs/fs_5.webp";
import fs_6 from "./images/fs/fs_6.webp";
import fs_7 from "./images/fs/fs_7.webp";
import fs_8 from "./images/fs/fs_8.webp";
import fs_9 from "./images/fs/fs_9.webp";
import fs_10 from "./images/fs/fs_10.webp";
import fs_11 from "./images/fs/fs_11.webp";
import fs_12 from "./images/fs/fs_12.webp";
import fs_13 from "./images/fs/fs_13.webp";
import fs_14 from "./images/fs/fs_14.webp";
import fs_15 from "./images/fs/fs_15.webp";
import fs_16 from "./images/fs/fs_16.webp";
import fs_17 from "./images/fs/fs_17.webp";
import fs_18 from "./images/fs/fs_18.webp";
import fs_19 from "./images/fs/fs_19.webp";
import fs_20 from "./images/fs/fs_20.webp";
import fs_21 from "./images/fs/fs_21.webp";
import fs_22 from "./images/fs/fs_22.webp";
import fs_23 from "./images/fs/fs_23.webp";
import fs_24 from "./images/fs/fs_24.webp";
import fs_25 from "./images/fs/fs_25.webp";
import fs_26 from "./images/fs/fs_26.webp";
import fs_27 from "./images/fs/fs_27.webp";
import fs_28 from "./images/fs/fs_28.webp";
import fs_29 from "./images/fs/fs_29.webp";
import fs_30 from "./images/fs/fs_30.webp";

import other_1 from "./images/other/other_1.webp";
import other_2 from "./images/other/other_2.webp";
import other_3 from "./images/other/other_3.webp";
import other_4 from "./images/other/other_4.webp";
import other_5 from "./images/other/other_5.webp";
import other_6 from "./images/other/other_6.webp";
import other_7 from "./images/other/other_7.webp";
import other_8 from "./images/other/other_8.webp";
import other_9 from "./images/other/other_9.webp";
import other_10 from "./images/other/other_10.webp";
import other_11 from "./images/other/other_11.webp";
import other_12 from "./images/other/other_12.webp";
import other_13 from "./images/other/other_13.webp";
import other_14 from "./images/other/other_14.webp";
import other_15 from "./images/other/other_15.webp";
import other_16 from "./images/other/other_16.webp";
import other_17 from "./images/other/other_17.webp";
import other_18 from "./images/other/other_18.webp";
import other_19 from "./images/other/other_19.webp";
import other_20 from "./images/other/other_20.webp";
import other_21 from "./images/other/other_21.webp";
import other_22 from "./images/other/other_22.webp";
import other_23 from "./images/other/other_23.webp";
import other_24 from "./images/other/other_24.webp";
import other_25 from "./images/other/other_25.webp";
import other_26 from "./images/other/other_26.webp";
import other_27 from "./images/other/other_27.webp";
import other_28 from "./images/other/other_28.webp";
import other_29 from "./images/other/other_29.webp";
import other_30 from "./images/other/other_30.webp";

let ALL_PONY = [
    ["Сумеречной Искоркой", "#5f0087", ts, [ts_1, ts_2, ts_3, ts_4, ts_5, ts_6, ts_7, ts_8, ts_9, ts_10, ts_11, ts_12, ts_13, ts_14, ts_15, ts_16, ts_17, ts_18, ts_19, ts_20, ts_21, ts_22, ts_23, ts_24, ts_25, ts_26, ts_27, ts_28, ts_29, ts_30]],
    ["Эпплджек", "#854f00", aj, [aj_1, aj_2, aj_3, aj_4, aj_5, aj_6, aj_7, aj_8, aj_9, aj_10, aj_11, aj_12, aj_13, aj_14, aj_15, aj_16, aj_17, aj_18, aj_19, aj_20, aj_21, aj_22, aj_23, aj_24, aj_25, aj_26, aj_27, aj_28, aj_29, aj_30]],
    ["Рарити", "#3e2f87", rr, [rr_1, rr_2, rr_3, rr_4, rr_5, rr_6, rr_7, rr_8, rr_9, rr_10, rr_11, rr_12, rr_13, rr_14, rr_15, rr_16, rr_17, rr_18, rr_19, rr_20, rr_21, rr_22, rr_23, rr_24, rr_25, rr_26, rr_27, rr_28, rr_29, rr_30]],
    ["Пинки Пай", "#8b003c", pp, [pp_1, pp_2, pp_3, pp_4, pp_5, pp_6, pp_7, pp_8, pp_9, pp_10, pp_11, pp_12, pp_13, pp_14, pp_15, pp_16, pp_17, pp_18, pp_19, pp_20, pp_21, pp_22, pp_23, pp_24, pp_25, pp_26, pp_27, pp_28, pp_29, pp_30]],
    ["Радугой Дэш", "#005e8d", rd, [rd_1, rd_2, rd_3, rd_4, rd_5, rd_6, rd_7, rd_8, rd_9, rd_10, rd_11, rd_12, rd_13, rd_14, rd_15, rd_16, rd_17, rd_18, rd_19, rd_20, rd_21, rd_22, rd_23, rd_24, rd_25, rd_26, rd_27, rd_28, rd_29, rd_30]],
    ["Флаттершай", "#877a00", fs, [fs_1, fs_2, fs_3, fs_4, fs_5, fs_6, fs_7, fs_8, fs_9, fs_10, fs_11, fs_12, fs_13, fs_14, fs_15, fs_16, fs_17, fs_18, fs_19, fs_20, fs_21, fs_22, fs_23, fs_24, fs_25, fs_26, fs_27, fs_28, fs_29, fs_30]],
    ["", "", "", [other_1, other_2, other_3, other_4, other_5, other_6, other_7, other_8, other_9, other_10, other_11, other_12, other_13, other_14, other_15, other_16, other_17, other_18, other_19, other_20, other_21, other_22, other_23, other_24, other_25, other_26, other_27, other_28, other_29, other_30]]
]

export function createElement(tag, params = {}, actions = () => {
}) {
    let el = document.createElement(tag);

    for (let name in params) {
        el.setAttribute(name, params[name]);
    }

    actions(el);

    return el;
}

export function start() {
    let scrollWidth = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth);

    if (!this.root.opeen) {
        this.root.opeen = true;

        this.root.checkbox.filter.style.display = "none";
        this.root.checkbox.text.error.style.display = "none";
        this.root.checkbox.logo.style.display = "none";

        this.root.checkbox.text.pony.style.display = "inline-block";
        this.root.checkbox.spinner.style.display = "inline-block";

        let randPony = ALL_PONY[Math.floor(Math.random() * (ALL_PONY.length - 1))];

        this.root.box_hide = createElement("div", {
            class: "ponyacha_box_hide"
        }, (el) => {
            el.addEventListener("click", () => {
                this.root.box.root.remove();
                this.root.box_hide.remove();

                this.root.checkbox.spinner.style.display = "none";

                if (this.root.checkbox.cheeck.style.display !== "inline-block") {
                    this.root.checkbox.logo.style.display = "inline-block";
                }

                setTimeout(() => {
                    this.root.opeen = false;
                }, 100);
            });
        });

        this.root.box = {
            root: createElement("div", {
                class: "ponyacha_box"
            }),

            header: {
                root: createElement("div", {
                    class: "ponyacha_box_header"
                }, (el) => {
                    el.style.backgroundColor = randPony[1];
                }),

                description: {
                    root: createElement("div", {
                        class: "ponyacha_box_header_description"
                    }, (el) => {
                        el.innerText = "Выберите все изображения с ";
                    }),

                    strong: createElement("strong", {
                        class: "ponyacha_box_header_description_strong"
                    }, (el) => {
                        el.innerText = randPony[0];
                    })
                },

                image: createElement("img", {
                    class: "ponyacha_box_header_image",
                    src: randPony[2]
                })
            },

            body: {
                root: createElement("div", {
                    class: "ponyacha_box_body"
                }),

                table: {
                    root: createElement("table", {
                        class: "ponyacha_box_body_table"
                    }),

                    body: createElement("tbody", {
                        class: "ponyacha_box_body_table_tbody"
                    })
                },

                error: createElement("div", {
                    class: "ponyacha_box_body_error"
                }, (el) => {
                    el.innerText = "Пожалуйста, выберите хотя бы один объект, или перезагрузите, если их нет."
                })
            },

            footer: {
                root: createElement("div", {
                    class: "ponyacha_box_footer"
                }),

                separator: createElement("div", {
                    class: "ponyacha_box_footer_separator"
                }),

                reload: createElement("img", {
                    class: "ponyacha_box_footer_reload",
                    src: refresh_2x
                }, (el) => {
                    el.addEventListener("click", () => {
                        this.root.box.root.remove();
                        this.root.box_hide.remove();

                        this.root.opeen = false;

                        start.call(this);
                    });
                }),

                confirm: createElement("input", {
                    class: "ponyacha_box_footer_confirm",
                    type: "button",
                    value: "Проверить"
                }, (el) => {
                    el.style.background = randPony[1];

                    el.addEventListener("click", () => {
                        if (this.root.selectList.length === 0) {
                            this.root.box.body.error.style.display = "inline-block";
                        } else {
                            this.root.checkbox.spinner.style.display = "none";

                            if (JSON.stringify(this.root.chekList.sort()) === JSON.stringify(this.root.selectList.sort())) {
                                this.root.checkbox.cheeck.style.display = "inline-block";

                                this.root.checkbox.text.pony.style.color = "green";

                                this.root.ponyacha.appendChild(createElement("label", {
                                    class: "ponyacha_label"
                                }, (el) => {
                                    el.appendChild(createElement("input", {
                                        type: "hidden",
                                        name: "ponyacha",
                                        value: sha256(this.root.token + "ponyacha_good")
                                    }));
                                }));

                                this.root.ponyacha.style.cursor = "default";
                                this.root.ponyacha.style.pointerEvents = "none";

                                setTimeout(() => {
                                    this.root.opeen = false;
                                }, 150);
                            } else {
                                this.root.checkbox.text.pony.style.display = "none";

                                this.root.checkbox.logo.style.display = "inline-block";
                                this.root.checkbox.filter.style.display = "inline-block";
                                this.root.checkbox.text.error.style.display = "inline-block";
                            }

                            setTimeout(() => {
                                this.root.box.root.remove();
                                this.root.box_hide.remove();

                                this.root.opeen = false;
                            }, 100);
                        }
                    });
                })
            }
        };

        this.root.chekList = [];
        this.root.selectList = [];

        for (let i = 1; i <= 3; i++) {
            try {
                let tr = createElement("tr", {
                    class: "ponyacha_box_body_table_tr"
                }, (el) => {
                    for (let ii = 1; ii <= 3; ii++) {
                        try {
                            let td = createElement("td", {
                                class: "ponyacha_box_body_table_td"
                            }, (el) => {
                                let randCat = ALL_PONY[Math.floor(Math.random() * ALL_PONY.length)];
                                let randImage = randCat[3][Math.floor(Math.random() * randCat[3].length)];

                                if (randCat[0] === randPony[0]) {
                                    this.root.chekList.push(randImage);
                                }

                                let checkbox = createElement("img", {
                                    class: "ponyacha_box_body_table_tbody_td_checkbox_" + ii,
                                    src: checkmark_blue
                                });

                                let image = createElement("img", {
                                    class: "ponyacha_box_body_table_tbody_td_image",
                                    src: randImage
                                }, (el) => {
                                    el.addEventListener("click", () => {
                                        if (el.style.transform !== "scale(0.8)") {
                                            el.style.transform = "scale(0.8)";

                                            checkbox.style.display = "inline-block";

                                            this.root.selectList.push(randImage);
                                        } else {
                                            el.style.transform = "scale(1)";

                                            checkbox.style.display = "none";

                                            let tempList = [];
                                            let iii = 1;

                                            for (let item in this.root.selectList) {
                                                try {
                                                    if ((this.root.selectList[item] === randImage) && (iii === 1)) {
                                                        iii++;
                                                    } else {
                                                        tempList.push(this.root.selectList[item]);
                                                    }
                                                } catch {
                                                    return false;
                                                }
                                            }

                                            this.root.selectList = tempList;
                                        }
                                    });
                                });

                                el.appendChild(checkbox);
                                el.appendChild(image);
                            });

                            el.appendChild(td);
                        } catch {
                            return false;
                        }
                    }
                });

                this.root.box.body.table.body.appendChild(tr);
            } catch {
                return false;
            }
        }

        this.root.box.header.description.root.appendChild(this.root.box.header.description.strong);

        this.root.box.header.root.appendChild(this.root.box.header.description.root);
        this.root.box.header.root.appendChild(this.root.box.header.image);

        this.root.box.body.table.root.appendChild(this.root.box.body.table.body);

        this.root.box.body.root.appendChild(this.root.box.body.table.root);
        this.root.box.body.root.appendChild(this.root.box.body.error);

        this.root.box.footer.root.appendChild(this.root.box.footer.separator);
        this.root.box.footer.root.appendChild(this.root.box.footer.reload);
        this.root.box.footer.root.appendChild(this.root.box.footer.confirm);
        this.root.box.footer.root.appendChild(this.root.box.header.root);

        this.root.box.root.appendChild(this.root.box.header.root);
        this.root.box.root.appendChild(this.root.box.body.root);
        this.root.box.root.appendChild(this.root.box.footer.root);

        this.root.ponyacha.appendChild(this.root.box_hide);
        this.root.ponyacha.appendChild(this.root.box.root);

        if ((this.root.ponyacha.getBoundingClientRect().top + window.scrollY) > this.root.box.root.offsetHeight) {
            this.root.box.root.style.top = ((this.root.ponyacha.getBoundingClientRect().top + window.scrollY) - this.root.box.root.offsetHeight + 38).toString() + "px";
        } else {
            this.root.box.root.style.top = "0px";
        }

        if ((scrollWidth - (this.root.ponyacha.getBoundingClientRect().left + window.scrollX)) > this.root.box.root.offsetWidth) {
            this.root.box.root.style.left = ((this.root.ponyacha.getBoundingClientRect().left + window.scrollX) + 29).toString() + "px";
        } else {
            this.root.box.root.style.left = (scrollWidth - this.root.box.root.offsetWidth - 1).toString() + "px";
        }
    }
}

export default class {
    constructor(data) {
        this.root = {
            selector: data.selector,
            token: data.token,
            chekList: [],
            selectList: [],
            opeen: false
        };

        if ((this.root.ponyacha = document.querySelector(this.root.selector))) {
            this.root.ponyacha.classList.add("ponyacha");

            this.root.ponyacha.addEventListener("contextmenu", (event) => {
                event.preventDefault();

                return false;
            });

            this.root.ponyacha.addEventListener("click", () => {
                start.call(this);
            });

            this.root.checkbox = {
                root: createElement("div", {
                    class: "ponyacha_checkbox"
                }),

                filter: createElement("span", {
                    class: "ponyacha_checkbox_filter"
                }),

                logo: createElement("img", {
                    class: "ponyacha_checkbox_logo",
                    src: checkbox
                }),

                spinner: createElement("img", {
                    class: "ponyacha_checkbox_spinner",
                    src: spinner
                }),

                cheeck: createElement("img", {
                    class: "ponyacha_checkbox_check",
                    src: checkmark
                }),

                text: {
                    root: createElement("div", {
                        class: "ponyacha_checkbox_text"
                    }),

                    pony: createElement("div", {
                        class: "ponyacha_checkbox_text_pony"
                    }, (el) => {
                        el.innerText = "Я поняшка";
                    }),

                    error: createElement("div", {
                        class: "ponyacha_checkbox_text_error"
                    }, (el) => {
                        el.innerText = "Проверка не пройдена!";
                    })
                }
            };

            this.root.logo = {
                root: createElement("div", {
                    class: "ponyacha_logo"
                }),

                icon: createElement("img", {
                    class: "ponyacha_logo_icon",
                    src: roku_chan
                }),

                text: createElement("div", {
                    class: "ponyacha_logo_text"
                }, (el) => {
                    el.innerText = "poNYACHA";
                })
            };

            this.root.checkbox.text.root.appendChild(this.root.checkbox.text.pony);
            this.root.checkbox.text.root.appendChild(this.root.checkbox.text.error);

            this.root.checkbox.root.appendChild(this.root.checkbox.filter);
            this.root.checkbox.root.appendChild(this.root.checkbox.logo);
            this.root.checkbox.root.appendChild(this.root.checkbox.spinner);
            this.root.checkbox.root.appendChild(this.root.checkbox.cheeck);
            this.root.checkbox.root.appendChild(this.root.checkbox.text.root);

            this.root.logo.root.appendChild(this.root.logo.icon);
            this.root.logo.root.appendChild(this.root.logo.text);

            this.root.ponyacha.appendChild(this.root.checkbox.root);
            this.root.ponyacha.appendChild(this.root.logo.root);
        } else {
            alert("Не удается найти" + this.root.selector + "элемент.");
        }
    }
}
