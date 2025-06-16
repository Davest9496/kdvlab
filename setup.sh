# Clear Next.js cache to ensure clean start
rm -rf .next

# Optional: Clear node_modules cache (if you're still having issues)
# rm -rf node_modules/.cache

# Start the development server
npm run dev

# After starting, test these URLs in your browser to verify font accessibility:
# http://localhost:3000/fonts/Gilroy-Light.otf
# http://localhost:3000/fonts/Gilroy-ExtraBold.otf
# http://localhost:3000/fonts/Rubik-Variable.ttf

echo "✅ Fonts should now be loading properly!"
echo ""
echo "🔍 To verify fonts are working:"
echo "1. Check browser console for font loading messages"
echo "2. Test the URLs above - they should download font files"
echo "3. Inspect elements to see if font-family is applied correctly"
echo "4. Check Network tab for successful font requests (200 status)"