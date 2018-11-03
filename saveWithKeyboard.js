/*global jQuery*/

/**
 * Self invoking function for 'Save with keyboard' plugin.
 * @version: 3.0.2
 */
(function($, undefined) {
    'use strict';
    var $Document = $(document),
        $SaveButton,
        doingClick = false,
        tooltipText,
        shortcutForEditor,
        isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;

    /**
     * Initialise on document ready. Checks the DOM to see which button we can use:
     *  - post/page/custom/media: #original_post_status[value=draft|auto-draft|publish] -> #save-action #save-post | #publishing-action #publish
     *  - comments: body.comment-php -> #save
     *  - theme editor: body.theme-editor-php -> #submit
     *  - plugin editor: body.plugin-editor-php -> #submit
     *  - profile-php: body.profile-php -> #submit
     *  - etc...
     */
    $(function() {
        var $Body = $(document.body),
            $Status = $('#original_post_status'),
            sStatus = $Status.val();

        var shortcut = 'Ctrl+S';
        shortcutForEditor = 'ctrl+s';

        if (isMacLike) {
            shortcut = 'Cmd(⌘)+S';
            shortcutForEditor = 'meta+s';
        }

        if (window.SaveWithKeyboard && SaveWithKeyboard.tooltipText) {
            tooltipText = SaveWithKeyboard.tooltipText.replace('$SHORTCUT$', shortcut);
        } else {
            tooltipText = 'Press ' + shortcut + ' to click';
        }

        if ($Status.length) {
            setButton(sStatus === 'publish' ? '#publish' : '#save-post');
        } else if ($Body.hasClass('link-php') || $Body.hasClass('link-add-php')) {
            setButton('#publish');
        } else if ($Body.hasClass('comment-php') || $Body.hasClass('wp-customizer')) {
            setButton('#save');
        } else if ($Body.hasClass('widgets-php')) {
            lookForButton(function() {
                var $Button = $('.widget-control-save:visible');

                if ($Button.length === 1) {
                    return $Button;
                }

                var $Focus = $(document.activeElement);
                return $Focus.is(':input') ? $Focus.parents('form:first').find(':submit') : undefined;
            });
        } else if ($Body.hasClass('edit-php')) {
            lookForButton(function() {
                return $('.inline-editor button.save');
            });
        } else if ($Body.hasClass('nav-menus-php')) {
            setButton('#save_menu_header');
        } else if ($Body.hasClass('upload-php')) {
            lookForButton(function() {
                return $('.imgedit-submit-btn');
            });
        } else if ($('#submit').length > 0) {
            setButton('#submit')
        }
    });

    /**
     * Looks for a button created at runtime. If a button is found, the shortcut is enabled for that button.
     * @param callback
     */
    function lookForButton(callback) {
        $Document.on('click', function() {
            var $Button = callback();

            if ($Button && $Button.length) {
                console.log('Button found!');
                setButton($Button);
            } else {
                console.log('No buttons found!');
            }
        });
    }

    /**
     * Tries to set the $SaveButton variable. If the selector is valid the keydown event listener is added, otherwise it is removed.
     * @param selector
     */
    function setButton(selector) {
        removeTooltip($SaveButton);

        $SaveButton = $(selector);
        var isButton = $SaveButton.length === 1;

        if (isButton && $SaveButton.is(":visible")) {
            $Document.on('keydown', handleKeydown);
            $Document.on('keyup', handleKeyup);

            addTooltip($SaveButton);

            $(document).on('tinymce-editor-init', function(event, editor) {
                editor.addShortcut(shortcutForEditor, tooltipText, doClick);
            });
        } else {
            $SaveButton = undefined;
            $Document.off('keydown', handleKeydown);
            $Document.off('keyup', handleKeyup);
        }

        console.log('Button', $SaveButton !== undefined, $SaveButton); // log
    }

    /**
     * Handles the actual keydown event.
     * @param e
     */
    function handleKeydown(e) {
        var modifierKeyPressed = (e.ctrlKey && !isMacLike) || (e.metaKey && isMacLike);

        if (modifierKeyPressed && (e.keyCode || e.which) === 83) {
            doClick();
            
            e.preventDefault();
        }
    }

    /**
     * Does the fake click.
     */
    function doClick() {
        if (doingClick) {
            return;
        }

        doingClick = true;

        if ($SaveButton && $SaveButton.is(':visible')) {
            $SaveButton.click();
        } else {
            console.log('Selected button not available/visible');
        }
    }

    /**
     * Handles the actual keyup event.
     * @param e
     */
    function handleKeyup(e) {
        if (doingClick === true) {
            doingClick = false;
        }
    }

    /**
     * Adds shortcut tooltip on button.
     */
    function addTooltip($Button) {
        var buttonTitle = $Button.attr('title');

        if (buttonTitle && buttonTitle != tooltipText) {
            buttonTitle += ' - ';
        } else {
            buttonTitle = '';
        }

        buttonTitle += tooltipText;

        $Button.attr('title', buttonTitle);
    }

    /**
     * Removes shortcut tooltip on button.
     */
    function removeTooltip($Button) {
        if ($Button) {
            var cleanedTitle = '';

            if ($Button.attr('title') !== tooltipText) {
                cleanedTitle = $Button.attr('title').replace(' - ' + tooltipText, '');
            }

            $Button.attr('title', cleanedTitle);
        }
    }
})(jQuery);
