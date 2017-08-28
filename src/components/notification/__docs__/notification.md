---
name: Notification
css: dist/components/notification/notification.css
js: dist/components/notification/notification.js
---

## Notification

Notifications are used to inform the user on when something has happened. We have notifications 
for warning, error, success, and of course Chuck. Notifications are created with the proper markup and 
CSS classes, and there is a Javascript class that wires up functionality. Notifications can be clicked 
to dismiss, which will initiate a fade-out animation followed by the removal of the DOM element.

### Element only

The only required parameter for the notification is `el`, which is the DOM element to apply the notification 
instance to.

    @example
    <div class="dm-notification-list example-list-element-only">
        <div class="dm-notification-list__item dm-notification-list__item--warning">Take it easy!</div>
        <div class="dm-notification-list__item dm-notification-list__item--error">Error!</div>
		<div class="dm-notification-list__item dm-notification-list__item--success">Great success!</div>
		<div class="dm-notification-list__item dm-notification-list__item--chuck">Chuck always wins!</div>
    </div>
    
    <script>
        document.querySelectorAll('.example-list-element-only .dm-notification-list__item').forEach(function(el){
            new Notification({
                el: el
            });
        });
    </script>
    
### Fixed modifier

There 
is a CSS modifier of `dm-notification-list` which will fix the notification list in the top right 
corner of the viewport. 

    @example
    <div class="dm-notification-list dm-notification-list--fixed example-list-fixed">
        <div class="dm-notification-list__item dm-notification-list__item--chuck">This notification list is fixed!</div>
    </div>
    
    <script>
        document.querySelectorAll('.example-list-fixed .dm-notification-list__item').forEach(function(el){
            new Notification({
                el: el
            });
        });
    </script>
    
### AfterOnClick Callback

The `afterOnClick` parameter is a function that, if provided, will be executed after the user clicks 
on the notification element and dismisses it. 

    @example
    <div class="dm-notification-list example-list-callback">
        <div class="dm-notification-list__item dm-notification-list__item--warning">This notification has a callback.</div>
    </div>
    
    <script>
        document.querySelectorAll('.example-list-callback .dm-notification-list__item').forEach(function(el){
            new Notification({
                el: el,
                onAfterClick: function() {
                    alert('This alert fires after the click.');
                }
            });
        });
    </script>
    
### AutoDismissTimeout option

The `autoDismissTimeout` parameter is a number value in milliseconds that, if provided, will automatically 
dismiss the notification. 

    @example
    <div class="dm-notification-list example-list-auto">
        <div class="dm-notification-list__item dm-notification-list__item--error">This notification automatically dismisses after 10 seconds.</div>
    </div>
    
    <script>
        document.querySelectorAll('.example-list-auto .dm-notification-list__item').forEach(function(el){
            new Notification({
                el: el,
                autoDismissTimeout: 10000
            });
        });
    </script>