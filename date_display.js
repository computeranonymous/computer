function same_day(d1, d2){
  return d1.getFullYear() == d2.getFullYear() && d1.getMonth() == d2.getMonth() && d1.getDate() == d2.getDate();
}

function add_days(dat, days){
  return new Date(dat.getFullYear(), dat.getMonth(), dat.getDate() + days);
}

function monday(d){
  while(d.getDay() != 1){
    d = add_days(d, -1);
  }
  return d;
}

function in_same_week(d1, d2){
  return same_day(monday(d1), monday(d2));
}

function day_this_week(current_date, day){
  var mon = monday(current_date);
  if(day == 1) return mon;
  return new Date(mon.getFullYear(), mon.getMonth(), mon.getDate() + day - 1)
}

function find_first_thursday(year, month){
  for(var i = 1; i <= 7; i++){
    var test = new Date(year, month, i);
    if(test.getDay() == 4){
      return test;      
    }
  }
}


function meetup_in_week_of(d){
  var first_thursday_in_month = find_first_thursday(d.getFullYear(), d.getMonth());
  if(in_same_week(d, first_thursday_in_month)){
    return first_thursday_in_month;
  }
  var meetup_last_week = meetup_in_week_of(new Date(d.getFullYear(), d.getMonth(), d.getDate() - 7));
  var desired_day = meetup_last_week.getDay() - 1;
  if(!desired_day) desired_day = 5;
  var result = day_this_week(d, desired_day);
  return result
}

var now = new Date();
var this_week_meetup = meetup_in_week_of(now);
var next_week_meetup = meetup_in_week_of(add_days(now, 7));
var days_of_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

if(now >= new Date(2013, 9, 1)){
  if(is_same_day(now, this_week_meetup)){
    document.write("<p>The meetup this week is today!</p>");
  } else {
    document.write("<p>The meetup this week " + (now <= this_week_meetup ? "is" : "was") + " on " + days_of_week[this_week_meetup.getDay() - 1] + "</p>");
  }
}
document.write("<p>The meetup next week is on " + days_of_week[next_week_meetup.getDay() - 1]+"</p>");
