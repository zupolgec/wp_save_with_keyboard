# Save with keyboard

## Description

This plugin lets you save your posts, pages, theme and plugin files in the most natural way: pressing Ctrl+S (or Cmd+S on Mac).

I've coded this plugin because I was tired of pressing Cmd+S and then realize Chrome was trying to save the whole webpage :S

After coding this up, I've found in the plugin directory two plugins that did the same thing, but each one had some flaws 
that convinced me to publish mine.

This plugin loads only a few lines of javascript in the footer of the pages where it is needed.

It is also *so* smart that saves as draft unpublished posts/pages and updates the ones that are already public.

Also adds a little tooltip on the buttons that can be "clicked" with Ctrl+S or Cmd+S.

## Installation

1. Upload `save-with-keyboard.php` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

## Frequently Asked Questions

### Is really so simple to install and use?

You can bet it is.

### Where the shortcut is enabled?

In New Page and New Post pages (saving as draft), in Page and Post edit pages (updating published page/post) and in Themes and Plugins editor pages.

## Screenshots

Nothing to show you. It works behind the scenes.

## Authors

Initial development by @zupolgec, refactoring for v2 by @sjeiti

## Changelog

### 2.1
Fixed stupid bug removing a single '!'

### 2.0
Updated plugin to work with the latest WP (3.9.2)
*   Refactored PHP to simply add a script.
*   Removed globals from Javascript through a self invoking function.
*   Refactored to save/publish any page/post/link/comment/widget/whatever.

### 1.1
Worked pretty well, but now it's awesome:
*  removed dependency from external libraries (except for jQuery which is anyway loaded by WP backend)
*  enabled shortcut in Themes and Plugins editor
*  added tooltip on shortcut-enabled buttons

### 1.0
First version. Should work already pretty well.
