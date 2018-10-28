# Save with keyboard

<p>
  <a href="https://wordpress.org/plugins/save-with-keyboard/">
    <img src="https://img.shields.io/wordpress/plugin/v/save-with-keyboard.svg?style=flat-square"
         alt="plugin version">
    <img src="https://img.shields.io/wordpress/plugin/dt/save-with-keyboard.svg?style=flat-square"
         alt="plugin downloads">
    <img src="https://img.shields.io/wordpress/plugin/r/save-with-keyboard.svg?style=flat-square"
         alt="plugin rating">
    <img src="https://img.shields.io/wordpress/v/save-with-keyboard.svg?style=flat-square"
         alt="plugin tested up to">
  </a>
</p>

## Description

This plugin lets you save your posts, pages, theme and plugin files in the most natural way: pressing Ctrl+S (or Cmd+S on Mac).

I've coded this plugin because I was tired of pressing Cmd+S and then realize Chrome was trying to save the whole webpage

After coding this up, I've found in the plugin directory two plugins that did the same thing, but each one had some flaws 
that convinced me to publish mine.

This plugin loads only a few lines of javascript in the footer of the pages where it is needed.

It is also *so* smart that saves as draft unpublished posts/pages and updates the ones that are already public.

Also adds a little tooltip on the buttons that can be "clicked" with Ctrl+S or Cmd+S.

<a href="http://www.commitstrip.com/en/2013/06/05/ctrl-s/">
  <img src="http://www.commitstrip.com/wp-content/uploads/2013/06/Strips-Ctrl+S-600-finalenglish.jpg">
</a>

## Installation

1. Upload the folder `save-with-keyboard` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

## Frequently Asked Questions

### Is it really so simple to install and use?

You can bet it is.

### Where can I use the shortcut?

Almost everywhere!
If it's not a post, page, widget, menu or link the plugin checks for the #submit or input[name=submit] selector (used in for instance theme, plugin and profile).

## Screenshots

Nothing to show you. It works behind the scenes.

## Authors

Initial development by @zupolgec, refactoring for v2 by @sjeiti

## Changelog

### 3.0
Added support for saving menus.
Rebuilt tooltip insertion with support for localization.
Tested up to WP 5.0 with Gutenberg (which doesn't use the plugin 'cause it already handles this shortcut).

### 2.3
Now the shortcut works even in visual editor!
Minimum WP version bumped to 3.0

### 2.2
Tested up to bumped to 4.8.2
Fixed typo in tooltip

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
