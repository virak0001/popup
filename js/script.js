$(document).ready(function () {
    var url = "https://pixabay.com/api/?key=14010091-6fc887d8f179a5dc0fe818556&q=green+vegetable&image_type=photo&pretty=true";
    $.ajax({
        dataType: 'json',
        url: url,
        success: function (data) {
            var result = "";
            data.hits.forEach(element => {

                const { largeImageURL, user,id, userImageURL, tags, likes, favorites, views, comments } = element;
                result +=
                    `
                    <div class="card mt-5">
                        <div class="card-body">
                            <img src="${largeImageURL}" class="img-fluid">
                        </div>
                        <div class="card-footer">
                            <i class="material-icons text-danger">favorite</i>
                            <img src="${userImageURL}" class="img-fluid rounded-circle" width="30">
                            ${tags}


                             <input type="button" id="btn" value="View" class="btn btn-warning float-right" data-toggle="modal" data-target="#myModal${id}">
                             <div class="modal fade" id="myModal${id}">
                                <div class="modal-dialog">
                                    <div class="modal-content">

                                        <!-- ///////////Header////////// -->
                                        <div class="modal-header">
                                            <img src="${userImageURL}" class="img-fluid rounded-circle" width="30">
                                            ${user}
                                            <button type="button" class="close"  data-dismiss="modal">&times;</button>
                                        </div>

                                        <!-- ////////body/////////// -->
                                        <div class="modal-body">
                                            <img src="${largeImageURL}" class="img-fluid">
                                        </div>

                                        <!-- ////////footter/////////// -->
                                        <div class="modal-footer">
                                        <ul class="list-group list-group-horizontal">
                                            <li class="list-group-item">
                                                <i class="material-icons text-success">thumb_up</i>${likes}
                                            </li>
                                            <li class="list-group-item">
                                                <i class="material-icons text-danger">favorite</i>${favorites}
                                            </li>
                                            <li class="list-group-item">
                                                <i class="material-icons text-info">visibility</i>${views}
                                            </li>
                                            <li class="list-group-item float-left">
                                                <i class="material-icons text-warning">comment</i>${comments}
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                        
                    </div>
                `
            });
            $("#card").append(result);
        }
    })
})