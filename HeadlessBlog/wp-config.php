<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'headlessblog');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'gV,w>r;65JLNhozeR_ZMMj= iZwN+cO&C98f;;lS0Oi0VfpTj{cSjGOynT6xcMe;');
define('SECURE_AUTH_KEY',  '+/ /prN#{~8),q)>,e&C:>Rk|(#,6T5^w2K13[40RpzlgR!(2s+!3t[F@Eb%qW-|');
define('LOGGED_IN_KEY',    'Eaw]?$,M%AxmQ=U.7|Zfbv|b*fdr0Wd,rE/ ,gn&xdk}uiHp-JS:@$Uxgg/<.{wG');
define('NONCE_KEY',        '$7/[bV0,~3<[BKZkxl#XN^6K.VExzAvkpjyki]d8.3HC.5Zms?3W[p_0Daj4b%N8');
define('AUTH_SALT',        '_|la/,CFrC~4De*4H/KwEu3u_2Bh@UYXeA9)}dUU5:C4h$Z}&~5tHwoAj=dCw}I.');
define('SECURE_AUTH_SALT', '*7/% sNPW}Ngki=Ay&Gm1v!T4^OL*6|x%=`4nYzj3BcWlc5iF>+{d. r;%5u_)F%');
define('LOGGED_IN_SALT',   '%<@_+TWHv^#ls_me_H`]Dt-axzD+[eX=LC|/#18g.jN>nSh%SsL%?Rv^<E||#hEh');
define('NONCE_SALT',       'U>`-$(z,p=N0`]Sbj26~^uQ08]qw*ZEB}uv^{we?IoyB|3n:XFS;vaI:^N/Y8Kzw');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
