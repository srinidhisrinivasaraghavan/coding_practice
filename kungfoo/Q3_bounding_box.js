/**
 * Title: Bounding Box
 *
 * Summary: Compute the smallest bounding box that contains all points.
 *
 * Difficulty: Easy
 *
 * Tags: Geometry
 *
 * Specification:
 *
 * Given an array of point objects determine the minimum
 * bounding box that contains all the points.
 * 
 * input: array of point objects where each object contains
 *        the x and y values for one point:
 *        
 *        [{x: integer, y: integer},{x: integer, y: integer},...]
 * 
 * output: array containing exactly two point objects where the
 *         first point object contains the minimum x  and minimum
 *         y values. The second point object contains the
 *         maximum x and maximum y values:
 * 
 *         [{x: <min x>, y: <min y> },{x: <max x>, y: <max y>}]
 */

/**
 * TEST CASES
 *
 * Test Case 1:
 *   input:  
 *          [{x: 10, y: 3  },
 *           {x: 20, y: 70 },
 *           {x: 35, y: 60 }]
 *
 *  output:  
 *          [{x: 10, y: 3 },
 *           {x: 35, y: 70}]
 *
 * Test Case 2:
 *   input:  
 *          [{x: 86, y: 70},
 *           {x: 64, y: 28},
 *           {x: 93, y: 39},
 *           {x: 20, y: 93},
 *           {x: 93, y: 12}]
 *
 *  output:  
 *          [{x: 20, y: 12},
 *           {x: 93, y: 93}]
 *
 * Test Case 3:
 *   input:  
 *          [{x: 68, y: 73},
 *           {x: 51, y: 19},
 *           {x: 65, y: 19},
 *           {x: 19, y: 50},
 *           {x: 18, y: 95}]
 *
 *  output:  
 *          [{x: 18, y: 19 },
 *           {x: 68, y: 95 }]
 */

function kungfoo(input) {
    var a ={} , b={};
    
    var x = input.sort(compareX)
    console.log(x);
    a.x = x[0].x;
    b.x = x[input.length-1].x;
    
    var y = input.sort(compareY)
    console.log(y);
    
    a.y = y[0].y;
    b.y = y[input.length-1].y;
    
    function compareX(a, b) {
        if (a.x > b.x) {
            return 1
        } else  if(a.x < b.x){
            return -1
        } else {
            return 0;
        }
    }
    
    function compareY(a, b) {
        if (a.y > b.y) {
            return 1
        } else  if(a.y < b.y){
            return -1
        } else {
            return 0;
        }
    }
    
    
    
    output = [a,b];
    
    return output;
}