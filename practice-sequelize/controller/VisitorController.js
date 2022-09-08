// const Visitor = require("../model/Visitor");
const { Visitor } = require("../model");

exports.get_visitors = (req,res) => {
    // findAll() : select * from visitor;
    Visitor.findAll()
    .then((result) => {
        console.log( "result : ", result );
        console.log( result[0].id ); 
        res.render("visitor", { data: result });
    });

    // Visitor.get_visitors(function( result ){
    //     console.log( "result : ", result );
    //     console.log( "index" );
    //     res.render("index", { data: result });
    // });
}

exports.post_comment = (req,res) => {
    let newComment = {
        name: req.body.name,
        comment: req.body.comment
    };

    Visitor.create(newComment)
    .then((result) => {
        console.log( result );
        res.send({ id: result.id });
    })
    // console.log( req.body );

    // Visitor.insert( req.body.name, req.body.comment, function( result ){
    //     res.send({ id: result });
    // } );
}

exports.get_visitor = (req,res) => {
    // select * from visitor where id = req.query.id limit 1
    Visitor.findOne({
        where: { id: req.query.id }
    }).then((result) => {
        console.log( result );
        res.send( { result : result } );
    })

    // Visitor.get_visitor( req.query.id, function(result) {
    //     console.log( "result : ", result );
    //     res.send( { result : result[0] } );
    // })
}

exports.patch_comment = (req,res) => {
    let updateComment = {
        name : req.body.name,
        comment : req.body.comment
    };
    // update visitor set name=req.body.name, comment= req.body.comment where id = req.body.id;
    Visitor.update( updateComment, { where: { id: req.body.id } } )
    .then((result) => {
        console.log( result );
        res.send( '수정성공' );
    })

    // Visitor.update( req.body, function(result){
    //     console.log( result );
    //     res.send( "수정 성공" );
    // });
}

exports.delete_comment = (req,res) => {
    Visitor.destroy({
        where: { id: req.body.id }
    }).then((result) => {
        console.log( result );
        res.send( "삭제 성공" );
    })
    // Visitor.delete( req.body.id, function(result){
    //     console.log( result );
    //     res.send( "삭제 성공" );
    // });
}