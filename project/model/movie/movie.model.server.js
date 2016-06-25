
module.exports = function() {

    var mongoose = require ("mongoose");
    var MovieSchema = require("./movie.schema.server.js")();
    var Movie  = mongoose.model("Movie", MovieSchema);

    var api = {
        
        findMovieById : findMovieById,
        updateRatingAndReview : updateRatingAndReview,
        createMovie: createMovie
        //reportReview: reportReview


        // createMovie: createMovie,
        // findMovieByTmdbID: findMovieByTmdbID,
        // findMoviesByTmdbIDs: findMoviesByTmdbIDs,
        // userRatesMovie: userRatesMovie,
        // userReviewsMovie: userReviewsMovie
    };
    return api;

    // function reportReview(reviewId, tmdbId) {
    //     console.log(tmdbId);
    //     console.log(reviewId);
    //
    //     var trueth = "true";
    //     //return Movie.update({tmdbId : tmdbId, reviews.username :  reviewId}, {$set:{reviews.$.flagged: trueth} });
    //
    //
    // }

    function findMovieById(id) {
        return Movie.find({tmdbId: id});
    }



    function updateRatingAndReview(id, ratingsandreviews) {
        var ratings = ratingsandreviews.ratings;
        var reviews = ratingsandreviews.reviews;
        

        return Movie
            .update({tmdbId: id},
                {$push: {ratings: ratings,
                    reviews: reviews}}
            );
    }

    function createMovie(movie) {
        return Movie.create(movie);
    }
    
    
    
    
    
    // function userRatesMovie (tmdbId, rating, userId, username, movie) {
    //     var deferred = q.defer();
    //     // find the movie by tmdb ID
    //     Movie.findOne({tmdbId: movie.id},
    //         function (err, doc) {
    //             if (err) {
    //                 deferred.reject(err);
    //             }
    //             // if there's a movie
    //             if (doc) {
    //                 // add user to ratings
    //                 doc.ratings.push ({"userId": userId, "username": username, "value": parseInt(rating)});
    //                 // add user to ratedByUsers
    //                 doc.ratedByUsers.push (userId);
    //                 doc.save(function(err, doc){
    //                     if (err) {
    //                         deferred.reject(err);
    //                     } else {
    //                         deferred.resolve(doc);
    //                     }
    //                 });
    //             }
    //             else {
    //                 // if there's no movie, create a new instance
    //                 movie = new Movie({
    //                     "tmdbId": tmdbId,
    //                     "title": movie.title,
    //                     "imageUrl": movie.poster_path,
    //                     "videoUrl": movie.untrusted_video_url,
    //                     "ratings": [],
    //                     "ratedByUsers": [],
    //                     "reviews": [],
    //                     "reviewedByUsers": []
    //                 });
    //                 // add user to ratings
    //                 movie.ratings.push ({"userId": userId, "username": username, "value": parseInt(rating)});
    //                 // add user to ratedByUsers
    //                 movie.ratedByUsers.push (userId);
    //                 // save new instance
    //                 movie.save(function(err, doc) {
    //                     if (err) {
    //                         deferred.reject(err);
    //                     } else {
    //                         deferred.resolve(doc);
    //                     }
    //                 });
    //             }
    //         });
    //
    //     return deferred.promise;
    // }
    //
    // function userReviewsMovie (tmdbId, review, userId, username, movie, isCritic) {
    //     var deferred = q.defer();
    //     // find the movie by tmdb ID
    //     Movie.findOne({tmdbId: movie.id},
    //         function (err, doc) {
    //             if (err) {
    //                 deferred.reject(err);
    //             }
    //             // if there's a movie
    //             if (doc) {
    //                 // add user to reviews
    //                 doc.reviews.push ({"userId": userId, "username": username, "text": review, "isCritic": isCritic});
    //                 // add user to reviewedByUsers
    //                 doc.reviewedByUsers.push (userId);
    //                 doc.save(function(err, doc){
    //                     if (err) {
    //                         deferred.reject(err);
    //                     } else {
    //                         deferred.resolve(doc);
    //                     }
    //                 });
    //             }
    //             else {
    //                 // if there's no movie, create a new instance
    //                 movie = new Movie({
    //                     "tmdbId": tmdbId,
    //                     "title": movie.title,
    //                     "imageUrl": movie.poster_path,
    //                     "videoUrl": movie.untrusted_video_url,
    //                     "ratings": [],
    //                     "ratedByUsers": [],
    //                     "reviews": [],
    //                     "reviewedByUsers": []
    //                 });
    //                 // add user to reviews
    //                 movie.reviews.push ({"userId": userId, "username": username, "text": review, "isCritic": isCritic});
    //                 // add user to reviewedByUsers
    //                 movie.reviewedByUsers.push (userId);
    //                 // save new instance
    //                 movie.save(function(err, doc) {
    //                     if (err) {
    //                         deferred.reject(err);
    //                     } else {
    //                         deferred.resolve(doc);
    //                     }
    //                 });
    //             }
    //         });
    //
    //     return deferred.promise;
    // }
    //
    // function createMovie(movie) {
    //     // create instance of movie
    //     var movie = new Movie({
    //         "tmdbId": movie.id,
    //         "title": movie.title,
    //         "imageUrl": movie.poster_path,
    //         "videoUrl": movie.untrusted_video_url,
    //         "ratings": [],
    //         "ratedByUsers": [],
    //         "reviews": [],
    //         "reviewedByUsers": []
    //     });
    //     var deferred = q.defer();
    //     // save movie to database
    //     movie.save(function (err, doc) {
    //         if (err) {
    //             deferred.reject(err)
    //         } else {
    //             deferred.resolve(doc);
    //         }
    //     });
    //     return deferred.promise;
    // }
    //
    // function findMovieByTmdbID(tmdbId) {
    //     var deferred = q.defer();
    //     Movie.findOne({tmdbId: tmdbId}, function (err, doc) {
    //         if (err) {
    //             deferred.reject(err);
    //         } else {
    //             deferred.resolve(doc);
    //         }
    //     });
    //     return deferred.promise;
    // }
    //
    // function findMoviesByTmdbIDs (tmdbIds) {
    //     var deferred = q.defer();
    //     Movie.find({
    //         tmdbId: {$in: tmdbIds}
    //     }, function (err, movies) {
    //         if (err) {
    //             deferred.reject(err);
    //         } else {
    //             deferred.resolve(movies);
    //         }
    //     });
    //     return deferred.promise;
    // }
};