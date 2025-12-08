// Simple script to view all messages in the database
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'chat.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err);
        process.exit(1);
    }
});

console.log('📊 Chat Messages in Database:\n');
console.log('='.repeat(80));

db.all('SELECT id, role, content, timestamp FROM messages ORDER BY timestamp ASC', [], (err, rows) => {
    if (err) {
        console.error('Error fetching messages:', err);
        db.close();
        process.exit(1);
    }

    if (rows.length === 0) {
        console.log('\n⚠️  No messages found in database.');
        console.log('Send some messages through the app first!\n');
    } else {
        console.log(`\nTotal Messages: ${rows.length}\n`);

        rows.forEach((row, index) => {
            const roleIcon = row.role === 'user' ? '👤' : '🤖';
            const roleLabel = row.role === 'user' ? 'USER' : 'AI';

            console.log(`${index + 1}. ${roleIcon} [${roleLabel.toUpperCase()}]`);
            console.log(`   ID: ${row.id}`);
            console.log(`   Time: ${row.timestamp}`);
            console.log(`   Message: ${row.content.substring(0, 100)}${row.content.length > 100 ? '...' : ''}`);
            console.log('-'.repeat(80));
        });
    }

    db.close((err) => {
        if (err) {
            console.error('Error closing database:', err);
        } else {
            console.log('\n✅ Database connection closed.\n');
        }
    });
});