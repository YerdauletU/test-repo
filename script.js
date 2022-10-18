function show_parent_folder_name(subfolder_name) {
    for(let i = 0; i < arr.length; i++) {
        for(let item of arr[i].folders) {
            if (subfolder_name === item.name) {
                console.log(arr[i].name);
            }
        }
    }
}

let arr = [
    {
        name: "Folder 1",
        folders: [
            {name: "Subfolder 1"},
            {name: "Subfolder 2"},
            {name: "Subfolder 3"},
        ]
    },

    {
        name: "Folder 3",
        folders: [
            {name: "Subfolder 7"},
            {name: "Subfolder 8"},
            {name: "Subfolder 9"},
        ]
    },
];

show_parent_folder_name('Subfolder 4');

////////////////////////////////////////////////////////////////////////////////////////////////////////

