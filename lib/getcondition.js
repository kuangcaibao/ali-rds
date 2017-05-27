'use strict'

module.exports = function(condition) {

  if(condition["$gt"]) {
    return {
      op: ">",
      value: condition["$gt"]
    }
  }
  else if(condition["$gte"]) {
    return {
      op: ">=",
      value: condition["$gte"]
    }
  }
  else if(condition["$lt"]) {
    return {
      op: "<",
      value: condition["$lt"]
    }
  }
  else if(condition["$lte"]) {
    return {
      op: "<=",
      value: condition["$lte"]
    }
  }
  else if($condition["$ne"]) {
    return {
      op: "!=",
      value: condition["$ne"]
    }
  }

  return condition;
}