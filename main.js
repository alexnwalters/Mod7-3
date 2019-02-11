$(function() {
    //add item to list
    $('#js-shopping-list-form').submit(function(event) {
        //prevent submission action
        event.preventDefault();
        //store input
        const newItem = $(event.currentTarget).find('#shopping-list-entry');
        //create new item html
        $('ul').append(
            `<li>
                <span class="shopping-item">${newItem.val()}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
        );
    });
    //toogle list item as complete
    $('ul').on('click', 'li .shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
    //remove item from list
    $('ul').on('click', 'li .shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
    
});