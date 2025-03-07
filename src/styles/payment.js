export const paymentStyles = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2147483647,
    backdropFilter: 'blur(4px)',
    overflow: 'auto',
    padding: '20px',
    isolation: 'isolate',
  },

  modalContent: {
    backgroundColor: 'white',
    padding: '0',
    borderRadius: '16px',
    width: '90%',
    maxWidth: '500px',
    maxHeight: '90vh',
    position: 'relative',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    animation: 'modalSlideIn 0.3s ease-out',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    isolation: 'isolate',
  },

  modalHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    padding: '1.2rem 1.5rem',
    backgroundColor: 'var(--payment-primary-color, #0070f3)',
    borderRadius: '16px 16px 0 0',
    color: 'var(--payment-secondary-color, #fff)',
    transition: 'background-color 0.3s ease',
  },

  title: {
    margin: '0',
    fontSize: '1.5rem',
    color: 'var(--payment-secondary-color, #fff)',
    fontWeight: 600,
    letterSpacing: '-0.01em',
  },

  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: 'var(--payment-secondary-color, #fff)',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    transition: 'background-color 0.2s ease, transform 0.1s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      transform: 'scale(1.1)',
    },
    '&[disabled]': {
      opacity: 0,
      visibility: 'hidden',
      pointerEvents: 'none',
    },
  },

  paymentElement: {
    padding: '2.5rem',
    background: '#fafafa',
    flex: 1,
    overflow: 'auto',
    minHeight: '200px',
  },

  payButton: {
    width: '100%',
    padding: '1rem 1.5rem',
    backgroundColor: 'var(--payment-primary-color, #0070f3)',
    color: 'var(--payment-secondary-color, #fff)',
    border: 'none',
    borderRadius: '0 0 16px 16px',
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease, transform 0.1s ease',
    position: 'sticky',
    bottom: 0,
    borderTop: '1px solid #eee',
  },

  loader: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: '2rem',
    },
    spinner: {
      width: '40px',
      height: '40px',
      border: '3px solid #f3f3f3',
      borderTop: '3px solid #0070f3',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginBottom: '1rem',
    },
    text: {
      color: '#666',
      margin: '0',
      fontSize: '0.9rem',
    },
  },

  statusModal: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center',
      animation: 'statusSlideIn 0.6s ease-out',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    icon: {
      wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80px',
        height: '80px',
        marginBottom: '1.5rem',
        borderRadius: '50%',
      },
      success: {
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        color: '#4CAF50',
      },
      error: {
        backgroundColor: 'rgba(255, 82, 82, 0.1)',
        color: '#FF5252',
      },
    },
    title: {
      margin: '0 0 0.5rem 0',
      fontSize: '1.5rem',
      fontWeight: '600',
    },
    titleSuccess: {
      color: '#4CAF50',
    },
    titleError: {
      color: '#FF5252',
    },
    message: {
      margin: '0',
      fontSize: '1rem',
      color: '#666',
      lineHeight: '1.5',
    },
  },

  animations: `
    @keyframes modalSlideIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    @keyframes statusSlideIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes iconScale {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes checkmark {
      0% {
        stroke-dashoffset: 100;
      }
      100% {
        stroke-dashoffset: 0;
      }
    }
    .success-checkmark {
      animation: iconScale 0.5s ease-out, checkmark 0.8s ease-out 0.5s forwards;
      stroke-dasharray: 100;
      stroke-dashoffset: 100;
    }
  `,

  paymentDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },

  companyName: {
    fontSize: '1.25rem',
    fontWeight: '600',
    letterSpacing: '-0.02em',
    margin: 0,
    flex: 1,
    color: 'var(--payment-secondary-color, #fff)',
  },

  headerTopRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  headerBottomRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
    opacity: 0.9,
    color: 'var(--payment-secondary-color, #fff)',
  },

  paymentInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
    flexDirection: 'row',
    color: 'var(--payment-secondary-color, #fff)',
  },

  orderId: {
    fontWeight: '500',
    color: 'var(--payment-secondary-color, #fff)',
  },

  amountDivider: {
    color: 'var(--payment-secondary-color, #fff)',
    opacity: 0.5,
  },

  amount: {
    fontWeight: '600',
    color: 'var(--payment-secondary-color, #fff)',
  },
};
