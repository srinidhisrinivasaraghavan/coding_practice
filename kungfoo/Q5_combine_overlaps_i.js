/**
 * Title: Combine Overlaps
 *
 * Summary: Combine overlapping ranges into a single range.
 *
 * Difficulty: Easy
 *
 * Tags: Array
 *
 * Specification:
 *
 * input: An array of range objects each containing:
 *     start: Integer, start of range,
 *       end: Integer, end of the range.
 * 
 * output: An array of non-overlapping range objects covering
 *         the same range(s) as input ordered from smallest 
 *         start to largest start. Two ranges overlap if 
 *         range1.start <= range2.start and 
 *         range1.end >= range2.start
 */

/**
 * TEST CASES
 *
 * Test Case 1:
 *   input:  
 *          [
 *          { start: 1,  end: 10 },
 *          { start: 5,  end: 15 },
 *          { start: 10, end: 20 }
 *          ]
 *
 *  output:  
 *          [
 *          { start: 1, end: 20 }
 *          ]
 *
 * Test Case 2:
 *   input:  
 *          [
 *          { start: 10, end: 20 },
 *          { start: 5,  end: 15  },
 *          { start: 1,  end: 5   }
 *          ]
 *
 *  output:  
 *          [
 *          { start: 1, end: 20 }
 *          ]
 *
 * Test Case 3:
 *   input:  
 *          [
 *          { start: 8, end: 10 },
 *          { start: 5, end: 7  },
 *          { start: 9, end: 12 },
 *          { start: 2, end: 6  },
 *          ]
 *
 *  output:  
 *          [
 *          { start: 2, end: 7  },
 *          { start: 8, end: 12 }
 *          ]
 *
 * [open any solution to see all test cases]
 */


function kungfoo(input) {
    var output = [];
    input.sort(function(a, b){
        return a.start - b.start;
    });
    
    var obj = {};
    input.forEach(function(ele, index) {
        if(index === 0) {
            obj.start = ele.start;
            obj.end = ele.end;
            output.push(obj);
        } else {
            if (ele.start > output[output.length - 1].end) {
                 obj = {};
                 obj.start = ele.start;
                 obj.end = ele.end;
                 output.push(obj);
            } else {
                if(ele.end > output[output.length - 1].end)
                output[output.length - 1].end = ele.end;
            }
        }
    });

    return output;
}