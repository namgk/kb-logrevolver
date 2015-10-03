Watch a log file every 30 minutes. If the file size is larger than 5MB, rename the file and create a new file with the original name.

TLDR - break a fat log file into smaller (5MB) pieces

node index.js <log_file_to_watch>
