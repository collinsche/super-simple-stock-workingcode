

package SimpleStocks.Exceptions;

public class TradeIndicatorNotFound extends Exception {
    public TradeIndicatorNotFound() {
    }

    public TradeIndicatorNotFound(String message) {
        super(message);
    }

    public TradeIndicatorNotFound(String message, Throwable cause) {
        super(message, cause);
    }

    public TradeIndicatorNotFound(Throwable cause) {
        super(cause);
    }

    public TradeIndicatorNotFound(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}

/**Coded by Collins Che -26 Jan 2018   **/