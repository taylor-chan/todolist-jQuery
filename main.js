var counter = 0;

// 按下Enter键添加todo事件
$('#new-todo').keydown(function (event) {
  if (event.which === 13) {
    event.preventDefault();
    event.stopPropagation();
    var task = $('#new-todo').val();
    // 确定输入值为有效值时才添加todo事件
    var valid = false;
    for (var i = 0; i < task.length; i++) {
      if(task[i] !== " ") {
        valid = true;
        break;
      }
    }
    if (valid) {
      counter++;
      var $todolist = $('<li class="active"><input type="checkbox" class="toggle"/><p>'+task+'</p><button class="delete"></button></li>');
      $('#todolist-all').append($todolist);
      $('#new-todo').val("");
    }
  }
})
