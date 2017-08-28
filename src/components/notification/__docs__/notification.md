---
name: Notification
css: dist/components/notification/notification.css
js: dist/components/notification/notification.js
---

## Notification

Notifications are used to inform the user on when something has happened. We have notifications 
for warning, error, success, and of course Chuck. 

    @example
    <div class="dm-notification-list">
        <div class="dm-notification-list__item dm-notification-list__item--warning">Take it easy!</div>
        <div class="dm-notification-list__item dm-notification-list__item--error">Error!</div>
		<div class="dm-notification-list__item dm-notification-list__item--success">Great success!</div>
		<div class="dm-notification-list__item dm-notification-list__item--chuck">Chuck always wins!</div>
    </div>
    
    <script>
        document.querySelectorAll('.dm-notification-list__item').forEach(function(el){
            new Notification({
                el: el,
                onAfterClick: function(e) {
                    console.log(e);
                }
            });
        });
    </script>
    