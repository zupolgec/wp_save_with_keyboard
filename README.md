=== Plugin Name ===
Contributors: zupolgec
Tags: save, keyboard, shortcut, ctrl-s, cmd-s, ctrl+s, cmd+s
Requires at least: 2.6
Tested up to: 3.2.1
Stable tag: trunk

This plugin lets you save your posts and pages in the most natural way: pressing Ctrl+s (or Cmd+s on Mac).

== Description ==

I've coded this plugin because I was tired of pressing Cmd+s and then realize Chrome was trying to save the whole webpage :S

After coding this up, I've found in the plugin directory two plugins that did the same thing, but each one had some flaws 
that convinced me to publish mine.

My plugin loads the awesome [Jwerty library](http://keithcirkel.co.uk/jwerty/) only on post.php and post-new.php, reducing the 
page load on the other admin pages.
It is also *so* smart that saves as draft unpublished posts/pages and updates the ones that are already public.

== Installation ==

1. Upload `save-with-keyboard.php` and `jwerty.min.js` to the `/wp-content/plugins/save-with-keyboard` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

== Frequently Asked Questions ==

= Is really so simple to install and use? =

You can bet it is.

== Changelog ==

= 1.0 =
First version. Should work already pretty well.
