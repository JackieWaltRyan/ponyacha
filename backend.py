from base64 import b64encode
from random import choice
from traceback import format_exc

ALL_PONY = [
    {
        "name": "Сумеречной Искоркой",
        "color": "#5f0087",
        "image": "ts",
        "images": [
            "ts_1",
            "ts_2",
            "ts_3",
            "ts_4",
            "ts_5",
            "ts_6",
            "ts_7",
            "ts_8",
            "ts_9",
            "ts_10",
            "ts_11",
            "ts_12",
            "ts_13",
            "ts_14",
            "ts_15",
            "ts_16",
            "ts_17",
            "ts_18",
            "ts_19",
            "ts_20",
            "ts_21",
            "ts_22",
            "ts_23",
            "ts_24",
            "ts_25",
            "ts_26",
            "ts_27",
            "ts_28",
            "ts_29",
            "ts_30"
        ]
    },
    {
        "name": "Эпплджек",
        "color": "#854f00",
        "image": "aj",
        "images": [
            "aj_1",
            "aj_2",
            "aj_3",
            "aj_4",
            "aj_5",
            "aj_6",
            "aj_7",
            "aj_8",
            "aj_9",
            "aj_10",
            "aj_11",
            "aj_12",
            "aj_13",
            "aj_14",
            "aj_15",
            "aj_16",
            "aj_17",
            "aj_18",
            "aj_19",
            "aj_20",
            "aj_21",
            "aj_22",
            "aj_23",
            "aj_24",
            "aj_25",
            "aj_26",
            "aj_27",
            "aj_28",
            "aj_29",
            "aj_30"
        ]
    },
    {
        "name": "Рарити",
        "color": "#3e2f87",
        "image": "rr",
        "images": [
            "rr_1",
            "rr_2",
            "rr_3",
            "rr_4",
            "rr_5",
            "rr_6",
            "rr_7",
            "rr_8",
            "rr_9",
            "rr_10",
            "rr_11",
            "rr_12",
            "rr_13",
            "rr_14",
            "rr_15",
            "rr_16",
            "rr_17",
            "rr_18",
            "rr_19",
            "rr_20",
            "rr_21",
            "rr_22",
            "rr_23",
            "rr_24",
            "rr_25",
            "rr_26",
            "rr_27",
            "rr_28",
            "rr_29",
            "rr_30"
        ]
    },
    {
        "name": "Пинки Пай",
        "color": "#8b003c",
        "image": "pp",
        "images": [
            "pp_1",
            "pp_2",
            "pp_3",
            "pp_4",
            "pp_5",
            "pp_6",
            "pp_7",
            "pp_8",
            "pp_9",
            "pp_10",
            "pp_11",
            "pp_12",
            "pp_13",
            "pp_14",
            "pp_15",
            "pp_16",
            "pp_17",
            "pp_18",
            "pp_19",
            "pp_20",
            "pp_21",
            "pp_22",
            "pp_23",
            "pp_24",
            "pp_25",
            "pp_26",
            "pp_27",
            "pp_28",
            "pp_29",
            "pp_30"
        ]
    },
    {
        "name": "Радугой Дэш",
        "color": "#005e8d",
        "image": "rd",
        "images": [
            "rd_1",
            "rd_2",
            "rd_3",
            "rd_4",
            "rd_5",
            "rd_6",
            "rd_7",
            "rd_8",
            "rd_9",
            "rd_10",
            "rd_11",
            "rd_12",
            "rd_13",
            "rd_14",
            "rd_15",
            "rd_16",
            "rd_17",
            "rd_18",
            "rd_19",
            "rd_20",
            "rd_21",
            "rd_22",
            "rd_23",
            "rd_24",
            "rd_25",
            "rd_26",
            "rd_27",
            "rd_28",
            "rd_29",
            "rd_30"
        ]
    },
    {
        "name": "Флаттершай",
        "color": "#877a00",
        "image": "fs",
        "images": [
            "fs_1",
            "fs_2",
            "fs_3",
            "fs_4",
            "fs_5",
            "fs_6",
            "fs_7",
            "fs_8",
            "fs_9",
            "fs_10",
            "fs_11",
            "fs_12",
            "fs_13",
            "fs_14",
            "fs_15",
            "fs_16",
            "fs_17",
            "fs_18",
            "fs_19",
            "fs_20",
            "fs_21",
            "fs_22",
            "fs_23",
            "fs_24",
            "fs_25",
            "fs_26",
            "fs_27",
            "fs_28",
            "fs_29",
            "fs_30"
        ]
    },
    {
        "name": "Other",
        "image": "other",
        "images": [
            "other_1",
            "other_2",
            "other_3",
            "other_4",
            "other_5",
            "other_6",
            "other_7",
            "other_8",
            "other_9",
            "other_10",
            "other_11",
            "other_12",
            "other_13",
            "other_14",
            "other_15",
            "other_16",
            "other_17",
            "other_18",
            "other_19",
            "other_20",
            "other_21",
            "other_22",
            "other_23",
            "other_24",
            "other_25",
            "other_26",
            "other_27",
            "other_28",
            "other_29",
            "other_30"
        ]
    }
]

DATA = {"name": "",
        "color": "",
        "image": "",
        "images": []}

SELECTLIST = []

if __name__ == "__main__":
    try:
        randPony = choice(seq=ALL_PONY[:-1])

        DATA.update({"name": randPony["name"],
                     "color": randPony["color"]})

        with open(file=f"./src/images/{randPony['image']}.webp",
                  mode="rb") as image_file:
            res_image = b64encode(s=image_file.read()).decode(encoding="UTF-8",
                                                              errors="ignore")

            DATA["image"] = f"data:image/webp;base64,{res_image}"

        for i in range(9):
            randCat = choice(seq=ALL_PONY)
            randImage = choice(seq=randCat["images"])

            with open(file=f"./src/images/{randCat['image']}/{randImage}.webp",
                      mode="rb") as image_file:
                res_image = b64encode(s=image_file.read()).decode(encoding="UTF-8",
                                                                  errors="ignore")

            if randCat["name"] == randPony["name"]:
                SELECTLIST.append(f"data:image/webp;base64,{res_image}")

            DATA["images"].append(f"data:image/webp;base64,{res_image}")

        print(DATA)
        print(SELECTLIST)
    except Exception:
        print(format_exc())
