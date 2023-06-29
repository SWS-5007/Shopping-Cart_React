import { useEffect } from 'react';
import { IoIosCheckmarkCircle, IoIosAlert } from 'react-icons/io';

import ImageContainer from 'components/common/ImageContainer';

import styles from './index.module.scss';

const ToastMessage = ({ toggleToast, content, className }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toggleToast();
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [content]);

  if (content.addToCartSuccess) {
    return (
      <div className={`${styles.addToCart} ${styles.success}`}>
        <div className={styles.content_wrapper}>
          {/* <img className={styles.image} src={content.image} alt="" /> */}
          <ImageContainer
            src={content.image}
            alt=""
            containerClassName={styles.image_container}
            fillClassName={styles.image_fill}
            imageClassName={styles.image}
          />
          <div>
            <p className={styles.title}>Product added to cart.</p>
            <p className={styles.details}>{content.message}</p>
          </div>
        </div>
        <i className={styles.icon}>
          <IoIosCheckmarkCircle />
        </i>
      </div>
    );
  }

  if (content.error) {
    return (
      <div className={`${styles.error} ${className}`}>
        <div className={styles.content_wrapper}>
          <div>
            <p className={styles.title}>There was an error.</p>
            <p className={styles.error_details}>{content.message}</p>
          </div>
        </div>
        <i className={styles.icon}>
          <IoIosAlert />
        </i>
      </div>
    );
  }
};

export default ToastMessage;
