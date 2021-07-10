var list = []

   exports.get = (route,body_in) => {
    var newitem = (JSON.parse(body_in)).name;
    console.log(route)
    switch(route){
    case "list":
    return {'code': 200, 'body': list};
    break
    case "add":
    list = list.push(newitem)
    return {'code': 200, 'body': list};
    break
    case "delete":
    return {'code': 200, 'body': 'delete'};
    break
    case "delete_all":
    return {'code': 200, 'body': 'delete_all'};
    break
    default:
    return {'code': 400, 'body': 'Bad Request'};
    }
   }