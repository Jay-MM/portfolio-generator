const generateHTML = (data) => {
    console.log(data)
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
    crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <title>Jesus's Portfolio</title>
</head>
<body>
    <div class="container"></div>
        <div class="row">
            <div class="col-md-6">
                <img src="" class="img-fluid" alt="picture of avatar" /> 
            </div>
            <div class="col-md-6">
                <h1>Jesus's Portfolio</h1>
                <h2>Milwaukee</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Distinctio officiis dolor error atque magni cum quam, ad aliquid nobis delectus quae vero soluta expedita necessitatibus, 
                    ipsum laborum non ipsa placeat.</p>
                    <a href="#">
                        <i class="bi bi-github fs-3"></i>
                    </a>
                    <a href="#">
                        <i class="bi bi-linkedin fs-3"></i>
                    </a>


        </div>
</body>
</html>
    `
}

module.exports =generateHTML