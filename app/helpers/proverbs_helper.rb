module ProverbsHelper
  def daily_proverb
    ::PROVERBS[Date.today.day % ::PROVERBS.size]
  end
end