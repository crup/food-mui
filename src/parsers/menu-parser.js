export default menuItems => menuItems.reduce((pv, cv) => {
    return {
        ...pv,
        [cv.category]: pv[cv.category] ? [...pv[cv.category], cv] : [ cv ]
    }
}, {})