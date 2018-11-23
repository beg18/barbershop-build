const smartgrid = require('smart-grid');

smartgrid('src/css/libs', {
    mobileFirst: false,
    filename: "smart-grid",
    columns: 12,
    offset: "20px",
    container: {
        maxWidth: "960px"
    },
    breakPoints: {
        md: {
            width: "940px",
            fields: "10px"
        },
        sm: {
            width: "720px"
        },
        xs: {
            width: "576px"
        },
        xxs: {
            width: "380px"
        }
    }
});

smartgrid('src/css/libs', settings);




/*
smartgrid('.');
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */